const client = require('../db');

module.exports = {
  create(params, callback) {
    console.log(params);
    const { email, password, name } = params;
    const insertparams = [email, password, name];
    const queryString = `WITH getval(id) AS ( INSERT INTO account (email, password, name) VALUES ($1, $2, $3) RETURNING id ) INSERT INTO story (account_id) SELECT id from getval;`;
    client.query(queryString, insertparams, (err, results) => {
      if (err) {
        console.log('Get Reviews Error: ', err);
      } else {
        const queryString = `SELECT json_agg(json_build_object('name', a.name, 'email', a.email, 'stories', (SELECT json_agg(json_build_object('name', n.storyname, 'story', n.storybody)) FROM story AS n WHERE n.account_id = a.id))) FROM account AS a WHERE a.email = $1;`;
        client.query(queryString, [email], (err, results) => {
          if (err) {
            console.log('Get Reviews Error: ', err);
          } else {
            console.log('This is results LINE 18 in models: ', results);
            console.log('THis is results LINE 18', results.rows[0].json_agg);
            callback(err, results.rows[0].json_agg[0]);
          }
        });
      }
    });
  },
  save(params, callback) {
    console.log('LINE 27 PARAMS IN SAVE ', params);
    const { email, body, name } = params;
    console.log('This is email line 29', email);
    console.log('This is name line 29', name);
    const getidparam = [email];
    const queryString = 'SELECT id FROM account WHERE account.email = $1;';
    client.query(queryString, getidparam, (err, results) => {
      console.log('LINE 32 result', results);
      console.log('This is results line  33 : ', results.rows[0].id);
      const id = results.rows[0].id;
      if (err) {
        console.log('Error with Save: ', err);
      } else {
        const queryString2 = `INSERT INTO story(account_id, storyname, storybody) values ($1, $2, $3);`;
        client.query(queryString2, [id, name, body], (err2, results2) => {
          if (err2) {
            console.log('Get Reviews Error: ', err2);
          } else {
            console.log('This is results LINE 18 in models: ', results2);
            callback(err2, results2);
          }
        });
      }
    });
  },
  get(params, callback) {
    console.log('This is params lINE 27 : ', params);
    const { email, password } = params;
    const tempparams = [email, password];
    const queryString = `SELECT json_agg(json_build_object('name', a.name, 'email', a.email, 'stories', (SELECT json_agg(json_build_object('name', s.storyname, 'body', s.storybody)) FROM story AS s WHERE s.account_id = a.id))) FROM account AS a INNER JOIN story AS s ON a.id = s.account_id WHERE a.email = $1 AND a.password = $2 `;
    client.query(queryString, tempparams, (err, results) => {
      if (err) {
        callback(err, null);
        console.log('Get Reviews Error: ', err);
      } else {
        callback(null, results.rows[0].json_agg[0]);
      }
    });
  },
};
// const queryString = `WITH getval(id) AS ( INSERT INTO account (email, password, name) VALUES ($1, $2, $3) RETURNING id ) INSERT INTO story (account_id) SELECT id from getval;`;
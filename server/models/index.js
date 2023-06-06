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
        const queryString = `SELECT json_agg(json_build_object('name', a.name, 'email', a.email, 's1', s.storyone, 's2', s.storytwo, 's3', s.storythree, 'names', (SELECT json_agg(json_build_object('one', n.nameone, 'two', n.nametwo, 'three', n.namethree)) FROM storyname AS n WHERE n.account_id = a.id))) FROM account AS a INNER JOIN story AS s ON a.id = s.account_id WHERE a.email = $1;`;
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
  get(params, callback) {
    console.log('This is params lINE 27 : ', params);
    const { email, password } = params;
    const tempparams = [email, password];
    const queryString = `SELECT json_agg(json_build_object('name', a.name, 'email', a.email, 's1', s.storyone, 's2', s.storytwo, 's3', s.storythree, 'names', (SELECT json_agg(json_build_object('one', n.nameone, 'two', n.nametwo, 'three', n.namethree)) FROM storyname AS n WHERE n.account_id = a.id))) FROM account AS a INNER JOIN story AS s ON a.id = s.account_id WHERE a.email = $1 AND a.password = $2 `;
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

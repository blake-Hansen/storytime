const client = require('../db');

module.exports = {
  getAccounts(params, callback) {
    // console.log(params);
    const [email, password] = params;
    const tempparams = [product_id];
    const queryString = `SELECT * FROM account WHERE ;`;
    client.query(queryString, tempparams, (err, results) => {
      if (err) {
        console.log('Get Reviews Error: ', err);
      } else {
        callback(err, results.rows[0].json_agg);
      }
    });
  },
};

const models = require('../models');
const getChat = require('../models/chatGPT');

module.exports = {
  getAccount: (req, res) => {
    console.log('LINE 6 post for get account', req.body.data);
    models.get(req.body.data, (err, results) => {
      if (err) {
        console.log(err);
        res.send('Invalid password');
        res.end();
      } else {
        console.log('LINE 13 CONTROLLER ', results);
        res.json(results);
        res.end();
      }
    });
  },
  createAccount: (req, res) => {
    console.log('This is body dot data: ', req.body.data);
    models.create(req.body.data, (err, results) => {
      if (err) {
        console.log(err);
        res.status(507);
        res.end();
      } else {
        console.log(results);
        res.json(results);
        res.status(201);
        res.end();
      }
    });
  },
  save: (req, res) => {
    console.log('LINE 6 body put for get account', req.body);
    models.save(req.body.data, (err, results) => {
      if (err) {
        console.log(err);
        res.send('Could not Save');
        res.end();
      } else {
        console.log('LINE 13 CONTROLLER ', results);
        res.json(results);
        res.end();
      }
    });
  },
  getStory: (req, res) => {
    console.log('This is body', req.query);
    getChat.getStory(req.query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(505);
        res.end();
      } else {
        console.log('We got to Line 23 in response controllers', results);
        res.json(results);
        res.status(201);
        res.end();
      }
    });
  },
};

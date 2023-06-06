const models = require('../models');
const getChat = require('../models/chatGPT');

module.exports = {
  getAccount: (req, res) => {
    console.log(req.body);
    res.status(201);
    res.end();
  },
  createAccount: (req, res) => {
    console.log(req.body);
    res.status(201);
    res.end();
  },
  getStory: (req, res) => {
    // console.log('This is body', req.body);
    getChat.getStory(req.body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(505);
        res.end();
      } else {
        console.log('We got to Line 23 in response controllers');
        res.json(results);
        res.status(201);
        res.end();
      }
    });
  },
};

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { Client } = require('pg');

console.log(process.env.DATABASE);
const client = new Client({
  database: process.env.DATABASE,
});

client.connect();

module.exports = client;

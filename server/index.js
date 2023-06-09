require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

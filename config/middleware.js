const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;

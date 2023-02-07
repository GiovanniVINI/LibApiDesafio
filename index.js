const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./config/routes');

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)
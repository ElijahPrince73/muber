const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

// Connection to server
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/muber')
// This line needs to be above routes()
app.use(bodyParser.json());
routes(app)

module.exports = app
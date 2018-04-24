const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

// Connection to server
mongoose.Promise = Promise
if (process.env.NODE_ENV !== 'test') {
	mongoose.connect('mongodb://localhost/muber')
}
// This line needs to be above routes()
app.use(bodyParser.json());
routes(app)

app.use((err, req, res, next) => {
	console.log(JSON.stringify(err, undefined, 2));
	res.status(422).send({
		err: err.message
	})
})

module.exports = app
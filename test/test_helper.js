const mongoose = require('mongoose');
before(done => {
	mongoose.connect('mongodb://localhost/muber_test');
	mongoose.connection
		.once('open', () => {
			console.log('CONNECTED TO TEST DATABASE');
			done()
		})
		.on('error', (err) => {
			console.log('WARNING', err);
		})
});

beforeEach(done => {
	const {
		drivers
	} = mongoose.connection.collections

	drivers.drop()
		.then(() => done())
		.catch(() => done())
})
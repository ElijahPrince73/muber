const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver')

beforeEach(done => {
	request(app)
		.post('/api/drivers')
		.send({
			email: 'test@test.com',
		})
	done()
})

describe('The express app', () => {
	it('handles a GET request to /api', (done) => {
		request(app)
			.get('/api')
			.end((err, response) => {
				assert(response.body)
				done()
			})
	});
});
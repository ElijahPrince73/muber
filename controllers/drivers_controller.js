const Driver = require('../models/driver');

module.exports = {
	getDrivers(req, res) {
		Driver.find({})
			.then((drivers) => {
				res.send(drivers)
			})
	},
	create(req, res) {
		const driverProps = req.body
		Driver.create(driverProps)
			.then((driver) => {
				res.send(driver)
			})
	}
}
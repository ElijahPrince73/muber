const Driver = require('../models/driver');

module.exports = {
	getDrivers(req, res) {
		Driver.find({})
			.then((drivers) => {
				res.send(drivers)
			})
	},
	createDriver(req, res, next) {
		const driverProps = req.body
		Driver.create(driverProps)
			.then((driver) => {
				res.send(driver)
			})
			.catch(next)
	},
	editDriver(req, res, next) {
		const driverId = req.params.id
		const driverProps = req.body

		Driver.findByIdAndUpdate({
				_id: driverId
			}, driverProps)
			.then(() => {
				return Driver.findById({
					_id: driverId
				})
			})
			.then((driver) => {
				res.send(driver)
			}).catch(next)
	}
}
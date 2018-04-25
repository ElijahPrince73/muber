const Driver = require('../models/driver');

module.exports = {
	index(req, res, next) {
		const {
			lng,
			lat
		} = req.query;

		Driver.aggregate(
				[{
					'$geoNear': {
						'near': {
							'type': 'Point',
							'coordinates': [parseFloat(lng), parseFloat(lat)]
						},
						'spherical': true,
						'distanceField': 'dist',
						'maxDistance': 200000
					}
				}]
			)
			.then(drivers => res.send(drivers))
			.catch(next);
	},
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
	},
	deleteDriver(req, res, next) {
		const driverId = req.params.id

		Driver.findByIdAndRemove({
				_id: driverId
			})
			.then(driver => {
				res.status(200).send(driver)
			})
			.catch(next);
	}
}
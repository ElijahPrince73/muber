const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
	app.get('/api', DriversController.getDrivers)
	app.post('/api/drivers', DriversController.createDriver)
	app.put('/api/drivers/:id', DriversController.editDriver)
	app.delete('/api/drivers/:id', DriversController.deleteDriver)
	app.get('/api/drivers', DriversController.index);
}
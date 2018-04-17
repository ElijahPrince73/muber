module.exports = {
	greeting(req, res) {
		res.send({
			hi: 'there'
		})
	},
	create(req, res) {
		console.log('Something here', req.body);
		res.send({
			hi: 'there'
		})
	}
}
const express = require('express');
const Bakery = require('../models/bakery');

const router = express.Router();

// research
router.get('/', function(req, res){
	res.send(req.params);
});

// get by name
router.get('/:name', function(req, res) {
	Bakery.findOne({name: req.params.name}).then(data => res.send(data))
	.catch(data => rend.sendStatus(404));
});

// add bakery
router.post('/', function(req, res) {
	const bakery = new Bakery(req.body);

	bakery.save(function(error, result){
		if(error) {
			console.log(error);
			res.sendStatus(400);
		}
		res.sendStatus(201);
	});
});

module.exports = router;
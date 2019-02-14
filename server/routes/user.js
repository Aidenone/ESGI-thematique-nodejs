const express = require('express');
const User = require('../models/user');

const router = express.Router();

// research
router.get('/', function(req, res){
	res.send(req.params);
});

// subscribe user
router.post('/', function(req, res) {
	const user = new User(req.body);

	user.save(function(error, result){
		if(error) {
			console.log(error);
			res.sendStatus(400);
		}
		res.sendStatus(201);
	});
});

module.exports = router;
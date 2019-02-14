const express = require('express');
const User = require('../models/user');

const router = express.Router();

// research with get params
router.get('/', function(req, res){
	User.find(req.query).then(data => res.send(data))
	.catch(data => rend.sendStatus(400));
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

// update bakery
router.put('/:user_id', function(req, res) {
	User.update({_id: req.params.user_id}, req.body).then(data => res.status(201).send(data))
	.catch(data => rend.sendStatus(400));
});

module.exports = router;
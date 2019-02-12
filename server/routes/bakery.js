const express = require('express');
const Bakery = require('../models/bakery');

const router = express.Router();

router.get('/', function(req, res){
	res.send("Home bakery");
});

router.get('/:name', function(req, res) {
	Bakery.findOne({name: req.params.name}).then(data => res.send(data));
});

module.exports = router;
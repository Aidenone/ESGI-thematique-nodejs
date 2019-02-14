const express = require('express');
const createToken = require('../libs/auth').createToken;
const User = require('../models/user');
const router = express.Router();

//verif username/password(hashé) avec la base

router.post('/login_check', (req, res) => {
    console.log(req.body.username, req.body.password);
    const fetchUser = User.findOne({user_name: "admin"}, function(error, result) {
	    const user = result;
	    if(user._id) {
	        const token = createToken({
	            username: req.body.username
	        });

	        res.send({
	            user,
	            token
	        });
	    } else {
	        res.sendStatus(400).send({
	            error: "Invalid username/password"
	        });
	    }
	});
})

module.exports = router;
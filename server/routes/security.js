const express = require('express');
const createToken = require('../libs/auth').createToken;
<<<<<<< HEAD

const router = express.Router();

router.post('/login_check', (req, res) => {
    console.log(req.body.username, req.body.password);
    if(req.body.username === 'user' && req.body.password === 'pass') {
        const token = createToken({
            username: "user",
            password:"pass"
        });

        res.send({
            token
        });
    } else {
        res.sendStatus(400).send({
            error: "Invalid username/password"
        });
    }
=======
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
>>>>>>> master
})

module.exports = router;
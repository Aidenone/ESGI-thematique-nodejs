const express = require('express');
const createToken = require('../libs/auth').createToken;

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
})

module.exports = router;
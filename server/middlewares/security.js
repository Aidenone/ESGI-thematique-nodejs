const verifyJWTToken = require('../libs/auth').verifyToken;

const verifyToken = (req, res, next) => {
    if(req.path === "/login_check") {
        next();
    } else {
        const auth = req.get('Authorization');
        if(!auth || !auth.startsWith('Bearer')) {
            res.sendStatus(401);
        } else{
            verifyJWTToken(auth.replace("Bearer ", ""))
            .then((decodedToken) => {
                req.user = decodedToken;
                next();
            })
            .catch((error) => res.status(400).send({
                error: "JWT TOKEN invalid",
                details: error
            }));
        }
    }
}

module.exports = {
    verifyToken
}
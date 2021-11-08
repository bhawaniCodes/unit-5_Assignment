require('dotenv').config();
const jwt = require('jsonwebtoken')

function verifyToken(token) {
    return new Promise(function (reject, resolve) {
        jwt.verify(token, process.env.SECRET_KEY_JWT, function (err, same) { 
            if (err) {
                return reject(err);
            } else {
                return resolve(same)
            }
        });
    })
}

async function authenticate(req, res, next) {
    const bearerToken = req?.headers?.authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer"))
        return res.status(400).send({message: "please provide bearer token"})

    const token = bearerToken.split(" ")[1];
    try {
        const { user } = await verifyToken(token);
        req.user = user;
        return next();
    } catch (err) {
        return res.status(400).send({ message: "please provide valid bearer token" });
    }
}


module.exports = authenticate;
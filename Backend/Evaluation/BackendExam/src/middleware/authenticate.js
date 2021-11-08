require('dotenv').config();
const jwt = require('jsonwebtoken')

function verifyToken(token) {
    console.log(process.env.SECRET_KEY_JWT);
    return new Promise(function (resolve, reject) {
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
    // console.log(req.headers)
    const bearerToken = req?.headers?.token;

    if (!bearerToken || !bearerToken.startsWith("bearer "))
        return res.status(400).send({message: "please provide bearer token"})

    const token = bearerToken.split(" ")[1];
    console.log('token:', token)
    try {
        const { user} = await verifyToken(token);
        console.log('user:', user)
        req.user = user;
        return next();
    } catch (err) {
        return res.status(400).send({ message: "please provide valid bearer token" });
    }
}

module.exports = authenticate;
require('dotenv').config();
const User = require('../models/user.model');
const jwt = require("jsonwebtoken");

const createToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY_JWT);
}

const register = async (req, res) => {
    user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send({message: "Email already exists"})
    user = await
}



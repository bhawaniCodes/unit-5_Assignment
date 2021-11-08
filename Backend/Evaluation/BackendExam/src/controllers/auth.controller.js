require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY_JWT);
};

const register = async (req, res) => {
    let user;
    try {
        console.log(req.body)
        user = await User.findOne({ email: req.body.email });

        if (user)
            return res.status(400).send({ message: "Email already exists" });
        console.log('user: ', user)
        user = await User.create(req.body);
        const token = createToken();
        return res.status(200).send({ user, token });
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const login = async (req, res)=>{
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (!user) {
            return res.status(400).send({ message: "please check your email or password" });
        }
        let match = user.checkPassword(req.body.password);

        if (!match) {
            return res.status(400).send({ message: "please check your email or password" });
        }

        const token = createToken(user);
        return res.status(200).send({ user, token });
    } catch (err) {
        return res.status(401).send({ message: "Something went wrong please try again" });
    }
}

module.exports = {register, login}

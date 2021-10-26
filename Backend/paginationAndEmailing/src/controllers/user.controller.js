const express = require('express');
const router = express.Router();
const User = require('../models/users.model')
const info = require('../utils/send-mail')
const nodemailer = require("nodemailer");

router.post('/',  async(req, res) => {
    try {
        const user = await User.create(req.body)
        const admins = await User.find({admin: true});

        await info({
            to: user.email, // list of receivers
            subject: "Hello me", // Subject line
            text: "Hello world text", // plain text body
            html: "<h2>Hello world?</h2>",
        });
        await info({
            to: admins.map((adm)=>adm.email), // list of receivers
            subject: `${user.first_name} ${user.last_name} has registered with us`, // Subject line
            text: `Please welcome ${user.first_name} ${user.last_name}`, // plain text body
            html: "<h2>Hello world?</h2>",
        }); 

        return res.send("user")
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
        let size = req.params.size || 10;
        let page = req.params.page || 1;

        const offset = (page - 1) * size;
        const users = await User.find().skip(offset).limit(size).lean().exec();

        const pageCount = Math.ceil(
            (await User.find().countDocuments()) / size
        );
        return res.send({users, pageCount});
    } catch (error) {
        return res.send(error.message)
    }
})

module.exports = router;


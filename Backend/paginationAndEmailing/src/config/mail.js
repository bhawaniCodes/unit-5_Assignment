require("dotenv").config();
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    host: process.env.NODE_ENV === 'development' ? "smtp.mailtrap.io" : "",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
    },
});

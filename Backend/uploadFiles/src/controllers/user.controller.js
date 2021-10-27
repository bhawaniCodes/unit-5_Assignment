const express = require("express");
const router = express.Router();
const upload = require('../config/fileUpload');
const User = require("../models/user.model");


router.post("/", upload.single("profile_pic"), async (req, res) => {
    try {
        console.log(req.body, req.file);

        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
        });
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;

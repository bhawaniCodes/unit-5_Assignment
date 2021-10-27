const express = require("express");
const router = express.Router();
const upload = require('../config/fileUpload');
const User = require("../models/user.model");
const Gallery = require("../models/gallery.model");
const fs = require('fs')


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
        return res.status(400).send("error");
    }
});

router.patch('/:id',upload.single("profile_pic"), async (req, res) => {
    try {
        const { profile_pic: oldProfile } = await User.findById(req.params.id);
        let user = await User.findByIdAndUpdate(req.params.id, {
            profile_pic: req.file.path
        })
        fs.unlinkSync(oldProfile);
        return res.status(200).send({user})
    } catch (error) {
        fs.unlinkSync(req.file.path);
        return res.status(400).send("error")
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { profile_pic: oldProfile } = await User.findById(req.params.id);
        await User.findByIdAndDelete(req.params.id);
        fs.unlinkSync(oldProfile);
        return res.status(200).send('done');
    } catch (error) {
        return res.status(400).send("error");
    }
});



module.exports = router;

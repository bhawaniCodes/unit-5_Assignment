const express = require("express");
const upload = require("../configs/multer");
const authenticate = require("../middleware/authenticate");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", upload.single("profile_photo_url"), async (req, res) => {
    try {
        const user = await User.create({ ...req.body, profile_photo_url : req.file.path});
        return res.status(201).send(user);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
router.get("/", authenticate, async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

module.exports = router;

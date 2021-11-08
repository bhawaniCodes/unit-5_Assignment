const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch {}
});

module.exports = router;
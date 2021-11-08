const express = require("express");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorization");
const Lecture = require("../models/lecture.model");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", authenticate, authorize(["instructor", "admin"]), async (req, res) => {
    try {
        const lecture = await Lecture.create(req.body);
        return res.status(201).send({lecture: lecture});
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
router.get("/", async (req, res) => {
    try {
        const lecture = await Lecture.find().lean().exec();
        return res.status(200).send(lecture);
    } catch (err) {
        return res.status(400).send(error.message);
    }
});

router.patch('/:id', authenticate, authorize(["admin"]), async (req, res) => {
    try {
        const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(lecture);
    } catch (error) {
        return res.status(400).send({message: "you are not authenticate to do this"});
    }
})

router.delete('/', authenticate, authorize(['admin']), async (req, res) => {
    try {
        const lecture = await Lecture.findByIdAndDelete(req.params.id, req.body);
        return res.status(200).send(lecture);
    } catch (error) {
        return res
            .status(400)
            .send({ message: "you are not authenticate to do this" });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const lecture = await Lecture.findById(req.params.id).lean().exec();
        return res.status(200).send(lecture);
    } catch (error) {
        return res
            .status(400)
            .send({ message: "Something went wrong" });
    }
})

module.exports = router;


// bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzYzNzQwMTh9.O73AX4p2oj7KWnksePc9Q18RLiKmuEPfyC8EO0S6q5c
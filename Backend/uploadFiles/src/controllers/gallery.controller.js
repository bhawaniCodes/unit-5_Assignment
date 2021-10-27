const express = require("express");
const router = express.Router();
const upload = require("../config/fileUpload");
const User = require("../models/user.model");
const Gallery = require("../models/gallery.model");
const fs = require("fs");

router.post("/multiple", upload.array("profile_pic", 5), async (req, res) => {
    try {
        let paths = req.files.map((file) => file.path);
        console.log(req.body.user_id, paths);

        const user = await Gallery.create({
            pictures: paths,
            user_id: req.body.user_id,
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.delete(
    "/multiple/:id",
    async (req, res) => {
        try {
            // let { pictures } = await Gallery.findById(req.params.id);

           let gallery = await Gallery.findByIdAndDelete(req.params.id);
            let { pictures } = gallery;

            pictures.forEach((pathh) => {
                fs.unlinkSync(pathh);
            });
            return res
                .status(200)
                .send({ gallery, message: "deleted successfully" });

        } catch (error) {
            return res.status(400).send(error);
        }
    }
);

module.exports = router;

const { body, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

const User = require("../model/user.model");

router.post(
    "",
    body("first_name").not().isEmpty().withMessage("Please enter first name"),
    body("last_name")
        .isLength({ min: 1 })
        .withMessage("Please enter last name"),
    body("email")
        .isEmail()
        .withMessage("email is required & it should be in email format only"),
    body("pincode")
        .isLength({ min: 6, max: 6 })
        .withMessage("pincode is required & should be length of 6"),
    body("age").isFloat({ min: 1, max: 100 }).withMessage("age is required"),
    body("gender")
        .toLowerCase()
        .isIn(["male", "female", "others"])
        .withMessage("gender should be only Male, Female or Others"),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array(), message: "server error" });
        }
        try {
            const user = await User.create(req.body);
            return res.status(200).send({ user });
        } catch (error) {
            console.log("error", error.message);
        }
    }
);

module.exports = router;

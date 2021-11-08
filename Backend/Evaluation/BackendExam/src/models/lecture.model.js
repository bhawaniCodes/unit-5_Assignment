const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        instructor: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true,
        },
        batch: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Lecture = mongoose.model("lectures", lectureSchema);
module.exports = Lecture;




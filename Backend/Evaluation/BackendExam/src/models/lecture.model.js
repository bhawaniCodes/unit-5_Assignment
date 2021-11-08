const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema(
    {
        user: {type: mongoose.Types.ObjectId, ref: 'users', required: true },
        roll_number: { type: Number, required: true },
        batch: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Lecture = mongoose.model("student", lectureSchema);
module.exports = Lecture;





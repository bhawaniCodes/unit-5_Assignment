const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
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

const Student = mongoose.model('student', studentSchema);
module.exports = Student;





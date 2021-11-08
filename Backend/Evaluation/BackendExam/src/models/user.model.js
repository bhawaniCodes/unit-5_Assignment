const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profile_photo_url: { type: String, required: true },
        roles: [{ type: String, required: true }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next()
    }

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function (password) { 
    const match = bcryptjs.compareSync(password, this.password);
    return match;
}

const User = mongoose.model('user', userSchema);
module.exports = User;

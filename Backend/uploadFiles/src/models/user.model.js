const mongoose = require('mongoose');

const {Schema } = mongoose;

const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    profile_pic: String
})

const User = mongoose.model('user', userSchema);

module.exports = User;
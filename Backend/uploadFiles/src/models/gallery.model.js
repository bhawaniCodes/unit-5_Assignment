const mongoose = require("mongoose");

const { Schema } = mongoose;

const gallerySchema = new Schema({
    pictures: [{ type: String, required: true }],
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
});

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;

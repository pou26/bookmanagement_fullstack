const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const moment = require("moment")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    authorname: {
        type: String,
    },
    ISBN: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: [String]
    },
    reviews: {
        type: Number,
        default: 0,
    },
    link: {
        type: String,
    },
    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    releasedAt: {
        type: String,
        // required : true
    },

    createdAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") },
    updatedAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") }
});

module.exports = mongoose.model('Book', bookSchema)
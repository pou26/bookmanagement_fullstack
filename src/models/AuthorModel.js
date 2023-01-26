const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const moment = require("moment")

const authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"],
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        pincode: { type: String, trim: true }
    },
    createdAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") },
    updatedAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") }
});
module.exports = mongoose.model('Author', authorSchema)
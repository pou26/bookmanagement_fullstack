const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const moment = require("moment")

const reviewSchema = new mongoose.Schema(
    {
        bookId:{
            type: ObjectId,
            ref: "Book",
            required: true
        },
        userId: {
            type: ObjectId,
            ref: "User",
            
        },
        reviewedBy: {
            type: String,       
        },
        reviewedAt: {
            type: String,
            required : true
        },

        rating: {
             type: Number 
            },
        review: { 
            type: String 
         },
         isDeleted: {
            type: Boolean,
            default: false
        },
        createdAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") },
        updatedAt: { type: String, default: moment().format("DD-MM-YYYY  h:mm:ss a") }
    });


module.exports = mongoose.model('Review', reviewSchema)





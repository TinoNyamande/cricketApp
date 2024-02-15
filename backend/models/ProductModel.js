const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    title:{
        type:String,
        required:[true,"Title cannot be empty"]
    },
    description:{
        type:String,
        required:[true,"Description cannot be empty"]
    },
    imageUrl:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    additionalImages:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    delivery:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },

},{timestamps:true})

module.exports = mongoose.model("product",ProductSchema);
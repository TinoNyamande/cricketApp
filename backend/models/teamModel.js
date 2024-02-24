const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    teamName:{
        type:String
    },
    color:{
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("team",teamSchema);
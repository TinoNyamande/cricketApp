const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    fullName:{
        type:String,
    },
    playerType:{
       type:String
    },
    price:{
        type:Number
    },
    team :{
        type:String
    }


},{timestamps:true})

module.exports = mongoose.model("player",playerSchema);
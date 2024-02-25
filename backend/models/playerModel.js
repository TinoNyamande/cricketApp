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
    },
    runs: {
        type:Number
    },
    fours : {
        type:Number
    },
    sixes : {
        type:Number
    },
    battingAverage :{
        type:Number
    },
    strikeRate : {
        type:Number
    },
    wickets :{
        type:Number
    },
    bowlingAverage : {
        type:Number
    },
    catches :{
        type:Number
    }



},{timestamps:true})

module.exports = mongoose.model("player",playerSchema);
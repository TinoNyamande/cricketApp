const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const MatchesShema = new Schema ({
    homeTeam:{
        type:String
    },
    awayTeam:{
        type:String
    },
    kickoffTime : {
        type:Date
    },
    kickoffDate : {
        type:Date
    },
    matchNumber : {
        type:Number
    },
    venue :{
        type:String
    }

})

module.exports = mongoose.model("match",MatchesShema);
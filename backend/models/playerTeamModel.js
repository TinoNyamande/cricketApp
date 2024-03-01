const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerTeam = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  transfers:{
    type:Number
},
balance:{
  type:Number
},
userId:{
  type:String
},
firstPlayer: {
    type: String,
  },
  secondPlayer: {
    type: String,
  },
  thirdPlayer: {
    type: String,
  },
  fourthPlayer: {
    type: String,
  },
  fifthPlayer: {
    type: String,
  },
  sixthPlayer: {
    type: String,
  },
  seventhPlayer: {
    type: String,
  },
  eighthPlayer: {
    type: String,
  },
  ninthPlayer: {
    type: String,
  },
  tenthPlayer: {
    type: String,
  },
  elevenPlayer: {
    type: String,
  },
  twelvePlayer: {
    type: String,
  },
  thirteenPlayer: {
    type: String,
  },
  fourteenPlayer: {
    type: String,
  },
  fifteenPlayer: {
    type: String,
  },
  sixteenPlayer: {
    type: String,
  },
});

module.exports = mongoose.model("playerTeam",playerTeam)
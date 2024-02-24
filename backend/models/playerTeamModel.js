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
  playerOne: {
    type: String,
  },
  playerTwo: {
    type: String,
  },
  playerThree: {
    type: String,
  },
  playerFour: {
    type: String,
  },
  playerFive: {
    type: String,
  },
  playerSix: {
    type: String,
  },
  playerSeven: {
    type: String,
  },
  playerEight: {
    type: String,
  },
  playerNine: {
    type: String,
  },
  playerTen: {
    type: String,
  },
  playerEleven: {
    type: String,
  },
  playerTwelve: {
    type: String,
  },
  playerThirteen: {
    type: String,
  },
  playerFourteen: {
    type: String,
  },
  playerFifteen: {
    type: String,
  },
  playerSixteen: {
    type: String,
  },
});

module.exports = mongoose.model("playerTeam",playerTeam)
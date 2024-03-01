const playerTeamModel = require("./../models/playerTeamModel");
const playerModel = require("./../models/playerModel")
const mongoose = require("mongoose");
const addTeam = (req, res) => {
  const {
    teamName,
    transfers,
    balance,
    userId,
    firstPlayer,
    secondPlayer,
    thirdPlayer,
    fourthPlayer,
    fifthPlayer,
    sixthPlayer,
    seventhPlayer,
    eighthPlayer,
    ninthPlayer,
    tenthPlayer,
    elevenPlayer,
    twelvePlayer,
    thirteenPlayer,
    fourteenPlayer,
    fifteenPlayer,
    sixteenPlayer,
  } = req.body;

  try {
    playerTeamModel.create({
      
        teamName,
        transfers,
        balance,
        userId,
        firstPlayer,
        secondPlayer,
        thirdPlayer,
        fourthPlayer,
        fifthPlayer,
        sixthPlayer,
        seventhPlayer,
        eighthPlayer,
        ninthPlayer,
        tenthPlayer,
        elevenPlayer,
        twelvePlayer,
        thirteenPlayer,
        fourteenPlayer,
        fifteenPlayer,
        sixteenPlayer,
    });
    res.status(200).json({ message: "Team saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTeam = async(req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid object id" });
  }
  const team = await playerTeamModel.find({userId:id});
  if (!team) {
    console.log(firstPlayer)
    return res.status(404).json({ error: "Team not found" });
  }

  return res.status(200).json({ data:team });
};
const playerTeamExists = async(req,res) =>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Invalid object id")
  }
  try {
    const team = await playerTeamModel.find({userId:id});
    if(team.length !=0) {
     firstPlayer  = await playerModel.findById(team[0].firstPlayer)
     secondPlayer = await playerModel.findById(team[0].secondPlayer)
     thirdPlayer = await playerModel.findById(team[0].thirdPlayer)
     fourthPlayer = await playerModel.findById(team[0].fourthPlayer)
     fifthPlayer = await playerModel.findById(team[0].fifthPlayer)
     sixthPlayer = await playerModel.findById(team[0].sixthPlayer)
     seventhPlayer = await playerModel.findById(team[0].seventhPlayer)
     eighthPlayer = await playerModel.findById(team[0].eighthPlayer)
     ninthPlayer = await playerModel.findById(team[0].ninthPlayer)
     tenthPlayer = await playerModel.findById(team[0].tenthPlayer)
     elevenPlayer = await playerModel.findById(team[0].elevenPlayer)
     twelvePlayer = await playerModel.findById(team[0].twelvePlayer)
     thirteenPlayer = await playerModel.findById(team[0].thirteenPlayer)
     fourteenPlayer = await playerModel.findById(team[0].fourteenPlayer)
     fifteenPlayer = await playerModel.findById(team[0].fifteenPlayer)
     sixteenPlayer = await playerModel.findById(team[0].sixteenPlayer)
     const teamDetails = {
        teamName:team[0].teamName,
        transfers:team[0].transfers,
        balance:team[0].balance,
        firstPlayer:firstPlayer,
        secondPlayer:secondPlayer,
        thirdPlayer:thirdPlayer,
        fourthPlayer:fourthPlayer,
        fifthPlayer:fifthPlayer,
        sixthPlayer:sixthPlayer,
        seventhPlayer:seventhPlayer,
        eighthPlayer:eighthPlayer,
        ninthPlayer:ninthPlayer,
        tenthPlayer:tenthPlayer,
        elevenPlayer:elevenPlayer,
        twelvePlayer:twelvePlayer,
        thirteenPlayer:thirteenPlayer,
        fourteenPlayer:fourteenPlayer,
        fifteenPlayer:fifteenPlayer,
        sixteenPlayer:sixteenPlayer
     }
     console.log(teamDetails)
      return res.status(200).json({message:true,data:teamDetails})
    }else {
      return res.status(400).json({message:false})
    }
  }catch(error) {
    console.log(error)
  }
}

module.exports = {
  addTeam,
  getTeam,
  playerTeamExists,
};

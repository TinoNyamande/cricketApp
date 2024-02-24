const playerTeamModel = require("./../models/playerTeamModel")
const mongoose = require("mongoose")
const addTeam = (req,res) =>{
    const {teamName,transfers,playerOne,playerTwo,playerThree,playerFour,playerFive,playerSix,playerSeven,playerEight,
        playerNine,playerTen,playerEleven,playerTwelve,playerThirteen,playerFourteen,playerFifteen,playerSixteen} = req.body
    
    try {
         playerTeamModel.create({teamName,transfers,playerOne,playerTwo,playerThree,playerFour,playerFive,playerSix,playerSeven,playerEight,
            playerNine,playerTen,playerEleven,playerTwelve,playerThirteen,playerFourteen,playerFifteen,playerSixteen})
        res.status(200).json({message:"Team saved successfully"})
    }catch(error) {
        res.status(400).json({error:error.message})
    }
}

const getTeam = (req,res)=>{
    const {id} = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error:"Invalid object id"})
    }
    const team = playerTeamModel.findById(id);
    if(!team) {
        return res.status(404).json({error:"Team not found"})
    }
    return res.status(200).json({team})
}

module.exports = {
    addTeam,
    getTeam
}
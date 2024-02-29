const { default: mongoose } = require("mongoose");
const playerModel = require("./../models/playerModel")

const addPlayer =async (req,res)=>{
    const {name,price,team,type}= req.body;
    try {
         playerModel.create({fullName:name,price,team,playerType:type});
        return res.status(200).json({message:"Player added successfully"})
    }catch(error) {
         return res.status(400).json({error:"Error adding player to database. Please try again later"})   
    }
}
const getPlayers = async (req,res)=>{
   const players = await playerModel.find();
   res.status(200).json({data:players})
   console.log(players);
}
const deletePlayer = async(req,res) =>{
    const {id} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
          res.status(400).json({error:"Invalid id"})
    }
    try {
        const player = playerModel.findByIdAndDelete(id);
        res.status(200).json({message:  `Player ${player.fullName} deleted successfully`})
    }catch(error) {
        res.status(400).json({error:error.message})
    }
}

const getPlayersByType = async(req,res)=>{
    const {type} = req.params;
    console.log(type)
try {
    const players = await playerModel.find({playerType:type});
    return res.status(200).json({data:players})

}catch(error) {
    console.log(error)
    
}
    // switch(type) {
    //     case "Batsman" :
    //         const batsmen = playerModel.find({playerType:"Batsman"})
    //         return res.status(200).json({data:batsmen})
    //         break
    //     case "Bowler" :
    //         const bowlers = playerModel.find({playerType:"Bowler"})
    //         return res.status(200).json({data:bowlers})
    //         break
    //     case "All Rounder" :
    //         const allRounders = playerModel.find({playerType:"All Rounder"})
    //         return res.status(200).json({data:allRounders})
    //         break;
    //     case "Wicket Keeper" :
    //         const keeper = playerModel.find({playerType:"Wicket Keeper"})
    //         return res.status(200).json({data:keeper})
    //         break
    //     default :
    //        return res.status(404).json({error:"Not found"})
    // }
}
const getPlayersByTeam = async (req,res) =>{
    const {team} = req.params;
    console.log(team)
    try {
        const data = await playerModel.find({team:team});
        return res.status(200).json({data});
    }catch(error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = {
    addPlayer,
    getPlayers,
    deletePlayer,
    getPlayersByType,
    getPlayersByTeam
}


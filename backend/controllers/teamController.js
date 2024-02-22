const teamModel = require("./../models/teamModel")

const addTeam = async(req,res) =>{
    const {teamName,color} = req.body;
    try {
        teamModel.create({teamName,color})
        return res.status(200).json({msg:"Team added"})
    }catch(error) {
        return res.status(400).json({error:"Failed to add team"})
    }
}

module.exports = {
    addTeam
}
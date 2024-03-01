const { default: mongoose } = require("mongoose");
const matchesModel = require("./../models/matchesModel");

const addMatch = async (req, res) => {
  const { homeTeam, awayTeam, kickoffTime, kickoffDate, matchNumber, venue } =
    req.body;
  console.log(kickoffTime);
  try {
    const match = await matchesModel.create({
      homeTeam,
      awayTeam,
      kickoffTime,
      kickoffDate,
      matchNumber,
      venue,
    });
    return res.status(200).json({ message: "Match added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
const getMatches = async (req, res) => {
  try {
    const data = await matchesModel.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
const getMatch = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }
  try {
    const match = await matchesModel.findById(id);
    return res.status(200).json({data:match});
  } catch (error) {
    console.log(error);
    return res.status(400).json({error:error.message});
  }
};
module.exports = {
  addMatch,
  getMatches,
  getMatch,
};

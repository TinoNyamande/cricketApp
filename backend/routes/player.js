const { addPlayer,getPlayers,deletePlayer ,getPlayersByType,getPlayersByTeam} =require("../controllers/playerController");
const express = require("express")
const router = express.Router();

router.post("/player",addPlayer);
router.get("/allplayers",getPlayers);
router.delete("/deleteplayers/:id",deletePlayer)
router.get("/getPlayersByType/:type",getPlayersByType);
router.get("/getPlayersByTeam/:team",getPlayersByTeam)

module.exports = router


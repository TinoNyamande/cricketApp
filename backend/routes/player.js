const { addPlayer,getPlayers,deletePlayer ,getPlayersByType} =require("../controllers/playerController");
const express = require("express")
const router = express.Router();

router.post("/player",addPlayer);
router.get("/allplayers",getPlayers);
router.delete("/deleteplayers/:id",deletePlayer)
router.get("/getplayersbytype/:type",getPlayersByType);

module.exports = router


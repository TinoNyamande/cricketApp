const {addTeam,getTeam,playerTeamExists} = require("./../controllers/playerTeam")
const express = require("express")
const router = express.Router();


router.post("/team",addTeam);
router.get("/team/:id",getTeam);
router.get("/team/user/:id",playerTeamExists)

module.exports = router;
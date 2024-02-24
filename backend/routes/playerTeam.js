const {addTeam,getTeam} = require("./../controllers/playerTeam")
const express = require("express")
const router = express.Router();


router.post("/team",addTeam);
router.get("/team/:id",getTeam);

module.exports = router;
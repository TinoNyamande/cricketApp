const {addMatch,getMatches,getMatch} = require("./../controllers/matchesController")
const express = require("express")
const router = express.Router();

router.post("/match",addMatch);
router.get("/match",getMatches);
router.get("/match/:id",getMatch)

module.exports = router;


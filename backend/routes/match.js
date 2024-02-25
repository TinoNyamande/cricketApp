const {addMatch,getMatches} = require("./../controllers/matchesController")
const express = require("express")
const router = express.Router();

router.post("/match",addMatch);
router.get("/match",getMatches);

module.exports = router;


require("dotenv").config();
const express = require("express")
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/product")
const teamRoutes = require("./routes/team");
const playerRoutes = require("./routes/player")
const playerTeamRoutes = require("./routes/playerTeam")
const matchesRoutes = require("./routes/match")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();

app.use(cors({origins:process.env.REACT_URI}))
mongoose.connect(process.env.MONGO_URI)
         .then((response)=>{
            app.listen(process.env.PORT,()=>{
                console.log("Listening to requests")
            })
         })
         .catch((error)=>{
            //console.log(process.env.MONGO_URI)
            console.log(error)
         })

app.use(express.json())
app.use((req,res,next)=>{
      console.log("Path" , req.path)
      console.log("Method",req.method)
      next()

})

app.use("/api/auth",authRoutes)
app.use("api/",productRoutes)
app.use("/api/teams",teamRoutes);
app.use("/api/players",playerRoutes)
app.use("/api/playerteam",playerTeamRoutes)
app.use("/api/matches",matchesRoutes)
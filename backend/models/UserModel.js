const mongoose = require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstname:{
        type:String,
        required:[true,"Firstname is required"]
    },
    lastname:{
        type:String,
        required:[true,"Lastname is required"]
    },
    email:{
        unique:[true,"Email is already in use"],
        type:String,
        lowercase:true,
        required:[true,"Email is required"],
        validator:[isEmail,"Invalid email address"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password must be at least 6 characters long"]
    },
    playerTeamId:{
        type:String
    },
  
},{timestamps:true})

UserSchema.post('save',function(doc,next) {
    next();
})
UserSchema.pre('save',async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next()
})
UserSchema.statics.login = async function(email,password) {
    const user = await this.findOne({email});
    if (user) {
            var auth = await bcrypt.compare(password,user.password)
            if(auth) {
                return user;
            }
            throw Error(message="incorrect password")
    }
    throw Error(message ="incorrect email")
}



module.exports = mongoose.model("user",UserSchema);
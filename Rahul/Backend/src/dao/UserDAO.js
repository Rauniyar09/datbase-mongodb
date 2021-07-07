const mongoose = require('mongoose');
const User = require("../schemas/UserSchema")

mongoose.connect('mongodb://localhost:27017/users' , { useNewUrlParser : true , useUnifiedTopology : true })
        .then(() => {console.log("Connected to mongodb........")})
        .catch(err => console.error("Error in Connection....",err));


async function saveUser(user){
    const data = new User(user);
    const result = await data.save();
    return result;
} 

async function findAllUsers(){
    const result = await User.find().sort({ name : 1}).select({ _id : 0, name : 1 , email : 1, password :1});
    return result;
} 

async function findUserByName(nam){
    try{
        const result = await User.findOne({ name : nam}).select({ _id : 0, name : 1 , email : 1, password :1});
        return result;
    }
    catch(e){
        return null;
    }
    
}

 async function updateUser(id,user){
    const result = await User.findByIdAndUpdate(id,user);
    return result;
}

module.exports.findUserByName = findUserByName;
module.exports.saveUser = saveUser;
module.exports.findAllUsers = findAllUsers;
module.exports.updateUser = updateUser;

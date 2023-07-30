const mongoose = require("mongoose")


// creating schema
const userSchema = new mongoose.Schema({

    // Stucture to store data
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    }
})



// export schema
module.exports = mongoose.model("User", userSchema) //to export schema we need a this type format which take two parameter 1.a name foer us =>[User] & 2. in which base shema will be =>[userSchema]



// * NOTE: => 
/* in mongoDB the captial case is note save it will be converted in lower case and singular number will be converted in pural
eg. => User --> users */
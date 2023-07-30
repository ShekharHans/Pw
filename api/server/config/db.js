//import dotenv file
require("dotenv").config()


// initilize mongoose
const mongoose = require("mongoose")


// connect database
const connectToDB = async () => {
    mongoose.connect(process.env.MONGO_URI)  //url which is store .env file
        .then((conn) => {
            console.log(`DB Connect`);
        }) // if connect [make a callback which make connection and handle the connection]
        .catch((err) => {
            console.log(err);
        }) // else[make a callback and handle the err]
}


// export
module.exports = connectToDB
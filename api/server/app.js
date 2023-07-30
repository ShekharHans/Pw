//initilized express
const express = require('express')


// import Database
const connectToDB = require("./config/db")

// create a app thorugh express
const app = express() //here app is a methode which gives many functions like app.get, app.listen etc.

// when the express app is ready then connect to the databse
connectToDB()

// import userRoutes
const userRoutes = require("./routes/userRoutes")

app.use("/",userRoutes)
// it says go to "/" then go to userRoutes...where the default routes is "/createUser"..then it comes to createUser and ask to what to do...createUser says that extract name and email from the body and checked and entry in database

// tell the express which type data you will be expect
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// 2.You need to initialize where the server is listening like "/","/login" etc. and return a callback which needs two parameter respond and request
app.get("/", (req, res) => {
    res.send("<h1>Namaste, I am Shekhar</h1> <h1>Namaste, I am Shekhar</h1>")    //here we say to app to send the respond
})


// make another example of api

app.get("/home", (req, res) => { //it always take req first and then respond it
    res.send("<h1>Namaste, I am Shekhar1</h1> <h1>Namaste, I am Shekhar</h1>")
})


// now make an api


app.get("/api", (req, res) => {
    res.json({
        "success": "true",
        "message": "Namaste to api calls",
        "name": "shekhar"

    })
})

module.exports = app //export app
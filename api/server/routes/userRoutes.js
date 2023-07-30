// routes 

const express = require("express")

// import userController
const { createUser } = require("../controllers/userControllers")

//create router 
const router = express.Router()

router.post("/createUser", createUser)

module.exports = router



// import models 
const User = require("../model/userModel")


// now write a methode which goes and ask to database
exports.createUser = async (req, res) => {
    //here we extract name and email which cames from the front-end by using destucture
    try {
        const { name, email } = req.body

        // check email or name correctly or not
        if (!name || !email) {
            throw new Error("Name and email is required !!")
        }

        // if email is exist then don't create email...to find the email

        // to find the value in database we use methode findeOne
        const userExsits = await User.findOne({ email })

        // if userExists is available then throw the error
        if (userExsits) {
            throw new Error("Email already exsits !!")
        }

        // else [userExsits is not find]
        const user = await User.create({
            name,
            email
        })

        // to display user
        // here we can give status also either we can just simplly write this res.json
        res.status(200).json({
            success: true,
            message: "User created Successfully",
            user
        })

    } catch (error) {
        console.log(error);
        // to display user
        // here we can give status also either we can just simplly write this res.json
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//* NOTE =>
// if you fill from in front end then it will comes by req.body
// or if you click by some url then it comes by req.params
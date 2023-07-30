
const ideas = require("../Models/idea.model")
// Search all Idea


exports.fetchAllIdeas =(req,res) =>{ 
    res.status(200).send(ideas);
}

// create a new idea

let idCount =1; //because when we start the server the initial id will be 1


exports.createIdeas =(res,req)=>{
    // Read the request body
    // Nead to generate the next idea id
    // Save it in the list of exsiing idearet
// return the response
}
// update idea

// delete idea
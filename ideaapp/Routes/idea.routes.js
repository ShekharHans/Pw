
const ideaController = require("../Controllers/idea.controller")


// Define the route for the calls like

// Get 127.0.0.1:8080/ideaApp/v1/ideas

module.exports = (app) => {
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);
}
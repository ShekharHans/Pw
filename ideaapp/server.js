const express = require("express")//function



const app = express();//excute and triverse in whole applecation

app.use(myMiddleware);//when client use server


//middleware -> function with special power (checkes in middle)
function myMiddleware(req, res, next) {
    console.log("inside the middle ware I create");
    next(); //it will pass the control to the next step
}

// stich the routes to the server

require("./Routes/idea.routes")(app);




//start server
app.listen(8080, () => { //8080 is port
    console.log("server started");
})
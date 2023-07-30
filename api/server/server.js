// import  app
const app = require("./app")

// make port in variable 
const PORT = 4000

// 1. say app to listing at PORT 4000 and return a callback function
app.listen(PORT, () => {
    console.log("Server is listening at PORT 4000");
})
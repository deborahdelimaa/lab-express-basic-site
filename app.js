const app  = express()
const express = require("express");

app.use(express.static("public"));

app.get("/", (request, response)=> {
    console.log(__dirname);
    response.sendFile(__dirname + "/view/home.html")
});
app.listen(3000, ()=> console.log("Server running on port 3000")) 

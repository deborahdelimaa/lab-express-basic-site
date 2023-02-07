const { application } = require("express");
const express = require("express");

app.use(express.static("public"));

app.get("/home", (request, response)=> {
    console.log(__dirname);
    responde.sendFile(__dirname + "/views/home.html")
});
app.listen(3000, ()=> console.log("Server running on port 3000")) 

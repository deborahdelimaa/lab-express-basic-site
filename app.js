const { response } = require("express");
const express = require("express");

const app  = express()

app.use(express.static("public"));

app.get("/", (request, response)=> {
    console.log(__dirname);
    response.sendFile(__dirname + "/view/home.html")
}); 

app.get("/about", (request, response) => {

    response.sendFile(__dirname + "/view/about.html");
  
  });
  
  
  
  app.get("/photo", (request, response) => {
  
    response.sendFile(__dirname + "/view/photo.html");
  
  });
  
  
  
  app.get("/works", (request, response) => {
  
    response.sendFile(__dirname + "/view/works.html");
  
  });


app.listen(3000, ()=> console.log("Server running on port 3000"))

var path = require("path");

module.exports  = function(app){
    //survey link file
    app.get("/survey",function(req,res){
       res.sendFile(path.join(__dirname,"../public/survey.html"));

    })
    app.get("/image1",function(req,res){
        res.sendFile(path.join(__dirname,"../public/front1.jpg"));
 
     })
     app.get("/image2",function(req,res){
        res.sendFile(path.join(__dirname,"../public/heart2.jpg"));
 
     })
     app.get("/where", (req, res) => {

        res.status(301).redirect("https://github.com/Vijayalakshmitce/FriendFinder.git")
    
    })

    

    //default link home file
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
 
     })
 


}
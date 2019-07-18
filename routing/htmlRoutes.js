
var path = require("path");

module.exports  = function(app){
    //survey link file
    app.get("/survey",function(req,res){
       res.sendFile(path.join(__dirname,"../public/survey.html"));

    })

    //default link home file
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
 
     })
 


}
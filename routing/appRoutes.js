
var friendsList = require("../app/data/friends.js");

module.exports  = function(app){
    //display friend list in api friend list
    app.get("/api/friends",function(req,res){
       res.json(friendsList);

    })

    //Post method to add and calculate the friendlist and score
    app.post("/api/friends",function(req,res){
          var getReqBody = req.body;
        if (friendsList.length < 50){
            friendsList.push(getReqBody);
            res.json(true);
           
        }
        
     })
 
   
}
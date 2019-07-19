var friendsList = require("../app/data/friends.js");

module.exports = function (app) {
    //display friend list in api friend list
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);

    })

    //Post method to add and calculate the friendlist and score
    app.post("/api/friends", function (req, res) {
        var getReqBody = req.body;
      
        if (friendsList.length < 20) {
            var totalScoreDiff =[];
            var scoreMin = 0;
            for(var i=0;i<friendsList.length;i++){
                var scoreDiff = 0;
                
                for(var j=0;j<friendsList[i].scores.length;j++){
                  console.log(friendsList[i].scores[j] + " - " + getReqBody.scores[j]);
                  scoreDiff += Math.abs(friendsList[i].scores[j] - getReqBody.scores[j]);

                }
                totalScoreDiff.push(scoreDiff);
                
                
            }
            console.log(totalScoreDiff);
            scoreMin = Math.min(...totalScoreDiff);
            console.log(scoreMin);

            for(var z=0; z<totalScoreDiff.length;z++){
                var minScoreIndex = totalScoreDiff.indexOf(scoreMin);
                
            }
            console.log("Min Score index: "+ minScoreIndex);
            var friendarray = friendsList;
            friendarray.push(getReqBody);
            console.log(friendsList);
            var bestMatchFriend = friendsList[minScoreIndex];
            console.log(bestMatchFriend);
          
            
            res.json(bestMatchFriend);
        
        }
        else {
            
            res.json(false);
          }
            
    })
    //app post loop end here









}
///export post loop end here
var firendData = require("../data/friends.js");

var newMember;
var theMatched;
var scoreDifferent = 0;
var currentMatchedScore = 0;
var candidate;
var candidateScore;
// ===============================================================================
// ROUTING
// ===============================================================================
function findingTheMatched(newMember){

  for (var i =0; i <(firendData.length -1); i++){
      scoreDifferent = 0;
      candidate = firendData[i];
      candidateScore = firendData[i].score;

        for (var j = 0; j < newMember.score.length; j++) {

          scoreDifferent += Math.abs(parseInt(newMember.score[j]) - parseInt(candidateScore[j]));
         
        }
    

      if(currentMatchedScore === 0){

          currentMatchedScore = scoreDifferent;
          theMatched = candidate;


      }else if(scoreDifferent <  currentMatchedScore){

              currentMatchedScore = scoreDifferent;
              theMatched = candidate;
            
     }
     
}

  return(theMatched);

}



module.exports = function(app) {




app.get("/api/friends", function(req, res){

  res.json(firendData);

});


app.post("/api/friends", function(req, res){

	//pushing the new member into the array
  firendData.push(req.body);

  //retrieving the newest member from the array
  newMember = firendData[(firendData.length)-1];

  
  var theMatched2 = findingTheMatched(newMember);

	res.json(theMatched2);


  //resetting global varaibles to 0
  currentMatchedScore = 0;
  theMatched = "";
  theMatched2 = "";
  
});




};
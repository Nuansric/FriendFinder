var firendData = require("../data/friends.js");

/*
[ 
{ name: 'C N',
    pictureLink: 'http://www.hbc333.com/data/out/114/47600979-image-cartoon.png',
    score: [ 3, 1, 5, 4, 2, 4, 4, 5, 3, 2 ] },
  { name: 'K C',
    pictureLink: 'http://previews.123rf.com/images/dazdraperma/dazdraperma1310/dazdraperma131000038/23290765-Illustration-de-bande-dessin-e-de-mignon-b-b-pingouin-Banque-d\'images.jpg',
    score: [ 3, 2, 2, 4, 4, 1, 4, 1, 3, 5 ] },
  { name: 'T C',
    pictureLink: 'http://content.mycutegraphics.com/graphics/bee/cute-cartoon-bee.png',
    score: [ 3, 1, 5, 4, 2, 1, 1, 2, 1, 2 ] },
  { name: 'J K',
    pictureLink: 'https://img.clipartfox.com/3e96bb9fca9b6451f6b922246d7f5705_black-and-white-penguin-free-cartoon-penguin-clipart_5183-6618.png',
    score: [ 5, 5, 5, 4, 4, 4, 4, 3, 3, 3 ] } 
]
*/
var newMember;
var theMatched;
var scoreDifferent = 0;
var currentMatchedScore = 0;
var candidate;
var candidateScore;
var currentMatched;
// ===============================================================================
// ROUTING
// ===============================================================================
function findingTheMatched(newMember){

  for (var i =0; i <(firendData.length -1); i++){
      scoreDifferent = 0
      candidate = firendData[i];
      candidateScore = firendData[i].score;

      for (var j = 0; j < newMember.score.length; j++) {

        scoreDifferent += Math.abs(parseInt(newMember.score[j]) - parseInt(candidateScore[j]));
       
      }
      // console.log(scoreDifferent);
      // console.log(currentMatchedScore);
      // console.log(newMember.name);
      // console.log(candidate);

      if(currentMatchedScore == 0){

          currentMatchedScore = scoreDifferent;
          theMatched = candidate;

          console.log("this is 0 "+ JSON.stringify(theMatched, null, 2));


      }else if(scoreDifferent <  currentMatchedScore){

              currentMatchedScore = scoreDifferent;
              theMatched = candidate;

              console.log("this is 1 "+ JSON.stringify(theMatched, null, 2));
     }
      console.log(scoreDifferent);
      console.log(currentMatchedScore);
      console.log(newMember.name);
      console.log(candidate);
      console.log("This is 2 "+JSON.stringify(theMatched, null, 2));


  }
console.log("This is 3"+ JSON.stringify(theMatched, null, 2));

return(theMatched);

}





module.exports = function(app) {




app.get("/api/friends", function(req, res){

  res.json(firendData);

});


app.post("/api/friends", function(req, res){

	firendData.push(req.body);

  newMember = firendData[(firendData.length)-1];

  var theMatched2 = findingTheMatched(newMember);

  console.log(theMatched2);


	res.json(theMatched2);

  currentMatchedScore = 0;
  theMatched = "";
  theMatched2 = "";
  
  // console.log("New member: " + JSON.stringify(newMember, null, 2));

})




}
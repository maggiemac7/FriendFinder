var friends = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
    app.post("/api/friends", function(req, res) {
        var incomingUser = req.body;
        //absolute val Math.abs()
    //On a post req we get acces to obj req.body
    //{name:'', photo:'', scores:[1,2,3,4,5,6,7,8,9,10]}
    //Min score
    let minimumScore = Infinity;
    //min scores user obj
    let minUser = null;
    //Loop over friends
    //i = single object 
    for (let i = 0; i < friends.length; i++) {
        //friends[i] reps a person stored in our 'database' that we wish to determine if
        //they are the closest match with the lowest current difference
        var currentFriend = friends[i];
        var currentDifference = 0;
        for (let j = 0; j < incomingUser.scores.length; j++) {
            //incomingUser.scores[j] reps incoming user score and currentFriend.scores[j] reps current copmare DB userscore
            //We need to subtract and take abs val, add that to current diff 
            currentDifference += Math.abs(incomingUser.scores[j]-currentFriend.scores[j])
        }

        //We need to determine if the user we just itereated through has a better minimum AKA better copmat
        if (
            minimumScore > currentDifference
        ){
            minimumScore = currentDifference;
            minUser = currentFriend;
        }

    }

    //minUser is what we shoudl return 

    //Inner loop coparing each friends 
        //some placeholder keeping track of score for each outer loop
        //scores to the current `friend` AKA req.body
        //j =  each individual score
        //goal: the Absolute Val of each score subtracted and add that up to place holder

        //After inner before outer ends
        //Check to see if current user has lower min score, if so assign to vars


        //Both loops complete
        //return min scores user obj
        res.json(minUser);
    });


    
    }


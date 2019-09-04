var friends = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
    app.post("/api/friends", function(req, res) {
        //absolute val Math.abs()
    //On a post req we get acces to obj req.body
    //{name:'', photo:'', scores:[1,2,3,4,5,6,7,8,9,10]}
    //Min score
    //min scores user obj
    //Loop over friends
    //i = single object 
    //Inner loop coparing each friends 
        //some placeholder keeping track of score for each outer loop
        //scores to the current `friend` AKA req.body
        //j =  each individual score
        //goal: the Absolute Val of each score subtracted and add that up to place holder

        //After inner before outer ends
        //Check to see if current user has lower min score, if so assign to vars


        //Both loops complete
        //return min scores user obj
    });


    
    }


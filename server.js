var express = require("express");
var htmlRouteCreator = require('./app/routing/htmlRoutes')
var apiRouteCreator = require("./app/routing/apiRoutes")
var app = express();
var PORT = 3036;


htmlRouteCreator(app);
apiRouteCreator(app);


app.get("*", function(req, res) {
    res.redirect('/');
    });

  app.listen(PORT, function(err) {
      if(err) throw err;
    console.log("App listening on PORT " + PORT);
  });
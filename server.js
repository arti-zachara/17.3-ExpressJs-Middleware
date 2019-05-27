var express = require("express");
var app = express();

// ----- GET: main page
app.get("/", function(req, res) {
  res.send("You're probably looking for store, am I right?");
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening on http://" + host + ":" + port);
});

// ------ handling 404
app.use(function(req, res, next) {
  res
    .status(404)
    .send("Not what you've been looking for but still I love U 3000");
});


var express = require("express");
var app = express();
var port = 4000;
// var port = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.listen(port, function() {
  console.log("server started at "+port);
});

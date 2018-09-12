var express = require("express"); // call express
var app = express();
const compression = require('compression');

app.use(compression());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.render("index");
});


app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});

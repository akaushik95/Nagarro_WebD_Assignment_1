var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var morgan = require('morgan');

var app = express();

app.use("/assets", express.static(__dirname+"/assets"));

app.use(morgan('combined'));
app.use("/", bodyParser.urlencoded({extended:false}));
app.set("view engine", "pug");

var callback = function (req, res) {
  console.log("!!!! server is running !!!!");
};

app.get("/", function (req, res) {
    // console.log("server is running") ;
    res.send("server is running");
});

app.get("/form", function (req, res) {
    res.sendFile(__dirname+"/form.html");
});

app.post("/submit", function (req, res) {
    var dob = req.body.date;
    var days = moment().diff(dob, 'days');
    res.render("index", {sometitle : "Student Details", message : "Hey "+req.body.name.toUpperCase() +", you have lived on this planet for "+days+ " days."});
});

app.post("/submit", function (req, res) {
    var dob = req.body.date;
    var days = moment().diff(dob, 'days');
    res.send("Hey "+req.body.name.toUpperCase() +", you have lived on this planet for "+days+ " days.");
});

app.listen(4000, callback);
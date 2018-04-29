var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 4400;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname + '/public')));

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});

app.get('/', function(req, res) {
    console.log("**");
    res.sendFile(path.join(__dirname, "../finder/app/public/home.html"));
});


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../finder/app/public/survey.html"));
});
var matches = require('../finder/app/data/friends.js');

app.get('/api/friends', function(req, res) {
    res.json(matches);
})

app.post('/api/friends', function(req, res) {
    console.log(userInfo)
})
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");

// Require Schemas
// var Article = require("./server/model");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

var Profiles = require("./server/profiles.js");

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/match-maker");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Route to get all saved articles
// zxxzsxszxdsxzdszdsZr  vszzxsz
//   ArtSicle.find({})
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// Ro
// Any non API GET routes will be directed to our React App and handled by React Router


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/public/login.html");
});


app.get("/api/profiles", function(req, res) {
  Profiles.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(doc);
    }
  });
});


app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
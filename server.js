// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db = require('./database.js')
// Require md5 MODULE
var md5 = require("md5")
// Require a middleware extension for express 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 5000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/api/", (req, res, next) => {
    res.json({"message":"Hey! My API works!"})
});

// Insert other CRUD API endpoints using express.js

// CREATE a new user (HTTP method POST) at endpoint /app/user/new/
app.get("/app/user/new/", (req, res, next) => {
	db.prepare('INSERT INTO userinfo(id,user,pass) VALUES(?,?,?)',
	[req.params.id, req.params.user, req.params.pass], function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("New user "+req.params.user+ " has been added.");
		res.send("New user "+req.params.user has been added.");
	});
});
// READ a list of users (HTTP method GET) at endpoint /app/user/all/

// READ a single user (HTTP method GET) at endpoint /app/user/:id

// UPDATE a single user (HTTP method PATCH) at endpoint /app/user/:id

// DELETE a single user (HTTP method DELETE) at endpoint /app/user/:id

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

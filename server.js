// Define app using express
var express = require("express")
var api = express()
// Require database SCRIPT file

// Require md5 MODULE

// Require a middleware extension for express 
var bodyParser = require("body-parser");
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// Server port
 
// Start server
api.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
api.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert other CRUD API endpoints using express.js

// CREATE a new user (HTTP method POST) at endpoint /api/user/:id

// READ a list of users (HTTP method GET) at endpoint /api/user/all/

// READ a single user (HTTP method GET) at endpoint /api/user/:id

// UPDATE a single user (HTTP method PATCH) at endpoint /api/user/:id

// DELETE a single user (HTTP method DELETE) at endpoint /api/user/:id

// Default response for any other request
api.use(function(req, res){
    res.status(404);
});

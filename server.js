var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var mongoose = require('mongoose')

var dbName = "friendDatabase";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + dbName;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("Listening on PORT" + PORT);
})
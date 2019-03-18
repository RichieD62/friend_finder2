//Requiring Express
const express = require("express");
const app = express();

//Require Body-Parser Middleware
const bodyParser = require('body-parser');

//Defining PORT
let PORT = process.env.PORT || 3000;

//Requiring Routes
let apiRoutes = require("./app/routing/apiRoutes")
let htmlRoutes = require("./app/routing/htmlRoutes")

//MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Using Routes
app.use(apiRoutes);
app.use(htmlRoutes);

//MongoDB Setup
const mongoose = require('mongoose')
const dbName = "friendDatabase";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + dbName;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

//Creating app.listen to run Server
app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
})
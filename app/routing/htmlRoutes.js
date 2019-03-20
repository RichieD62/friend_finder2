var path = require("path")
var express = require("express")
var router = express.Router()

    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/home.html"))
    })

    router.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/survey.html"))
    })

    router.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/friends.html"))
    })

    module.exports = router
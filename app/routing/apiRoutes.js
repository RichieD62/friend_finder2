var db = require("../model/friends.js")
var express = require("express")
var router = express.Router()


//Get all friends in database
router.get("/friends", (req, res) => {
    db.find({})
        .then(function(dbFriend) {
            res.json(dbFriend)
        })
        .catch(function (err) {
            res.json(err)
        })
})

//Create a new friend
//localhost:3000/friends
router.post("/friends", (req, res) => {
    console.log(req.body)
    db.Friend.create(req.body)
        .then(function(dbFriend) {
           res.json(dbFriend)
        })
        .catch(function (err) {
            res.json(err)
        })
})

router.get("/test/:bologna", (req, res) => {
    res.send(`Test route was hit. Your bologna is ${req.params.bologna}`)
})

module.exports = router

var db = require("../model/friends")
var express = require("express")
var router = express.Router()


//Get all friends in database
router.get("/friends", function (req, res) {
    db.Friend.find({})
        .then(function (dbFriend) {
            res.json(dbFriend)
        })
        .catch(function (err) {
            res.json(err)
        })
})

router.post("/friends", function (req, res) {
    console.log(req.body)
    db.Friend.create(req.body)
        .then(function (dbFriend) {
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

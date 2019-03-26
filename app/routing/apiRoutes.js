var db = require("../model/friends.js")
var express = require("express")
var router = express.Router()


//Get all friends in database
router.get("/api/friends", (req, res) => {
    db.find({})
        .then(function (dbFriend) {
            res.send(dbFriend)
        })
        .catch(function (err) {
            res.json(err)
        })
})

//Create a new friend
//localhost:3000/friends
router.post("/friends", (req, res) => {

    //Define Variables
    var matchName = '';
    var matchPicture = '';
    var totalDifference;
    var bestDifference;
    var newFriend = req.body;
    var friendsList = [];

    //NEED TO FIGURE OUT HOW TO GET THE FRIENDS LIST OUT OF THE FRONT END GET REQUEST

    console.log(`line 41 ${friendsList}`)

    console.log(`NEW FRIEND ~~~~~~ ${newFriend.scores}`)

    // for (var i = 0; i < dbFriend.length; i++) {
    //     totalDifference = 0;

    //     for (var j = 0; j < dbFriend.scores.length; i++) {
    //         totalDifference += Math.abs((parseInt(dbFriend[i].scores) - parseInt(newFriend.scores)))
    //         console.log(totalDifference)
    //     }



    // }

    //Enter into Database
    db.create(newFriend)

        .then(function (dbFriend) {
            res.json(dbFriend)
        })
        .catch(function (err) {
            res.json(err)
        })
})

module.exports = router

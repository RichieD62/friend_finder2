var db = require("../model/friends")

module.exports = function (app) {

    //Get all friends in database
    app.get("/friends", function (req, res) {
        db.Friend.find({})
            .then(function (dbFriend) {
                res.json(dbFriend)
            })
            .catch(function (err) {
                res.json(err)
            })
    })

    app.post("/friends", function (req, res) {
        console.log(req.body)
        db.Friend.create(req.body)
            .then(function(dbFriend){
                res.json(dbFriend)
            })
            .catch(function(err) {
                res.json(err)
            })
        // var newFriend = new Friend(req.body);
        // newFriend.save()
        //     .then(item => {
        //         res.send(item + " saved to DB");
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         res.status(400).send("unable to send to DB")
        //     })

    })
}

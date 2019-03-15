var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FriendSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },

    age:  {
        type: Number
    },

    occupation: {
        type: String
    },

    picture: {
        type: String
    },

    answer1:{
        type: Number
    },

    answer2:{
        type: Number
    },

    answer3:{
        type: Number
    },

    answer4:{
        type: Number
    },

    answer5:{
        type: Number
    },

    answer6:{
        type: Number
    },

    answer7:{
        type: Number
    },

    answer8:{
        type: Number
    },

    answer9:{
        type: Number
    },

    answer10:{
        type: Number
    },
})

var Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
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
        type: String,
        trim: true
    },

    picture: {
        type: String,
        trim: true
    },

    scores: {
        type: Array
    },

    inDB:{
        type: Boolean,
        default: true
    }
})

var Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
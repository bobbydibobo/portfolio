/*---------------------
DEPENDENCIES
---------------------*/
const mongoose = require('mongoose');

/*---------------------
MONGOOSE SCHEMA
---------------------*/
const userMessageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

/*---------------------
PROJECT OBJECT
---------------------*/
const UserMessage = mongoose.model('UserMessage', userMessageSchema);

module.exports = UserMessage;
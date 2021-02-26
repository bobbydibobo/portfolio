/*---------------------
DEPENDENCIES
---------------------*/
const express = require('express');

/*---------------------
SCHEMAS
---------------------*/
const UserMessage = require('../models/Message');

/*---------------------
ROUTER
---------------------*/
const router = express.Router();

/*---------------------
GET ROUTES
---------------------*/
router.get('/', (req, res) => res.render('personal-portfolio'));

/*---------------------
MESSAGE HANDLER
---------------------*/
router.post('/', (req, res) => {
    const {name, email, msg} = req.body;

    const newUserMessage = new UserMessage({
        name,
        email,
        msg
    });

    newUserMessage.save();

    res.render('thx');
});


module.exports = router;
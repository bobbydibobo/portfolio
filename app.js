/*---------------------
DEPENDENCIES
---------------------*/
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// /*---------------------
// SCHEMAS
// ---------------------*/
// const Message = require('./models/Message');

/*---------------------
INIT APP
---------------------*/
const app = express();

/*---------------------
DB CONNECT
---------------------*/
const database = require('./config/keys').MongoURI;

mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Successfully connected to MongoDB'))
.catch(err => console.log(`An error occured: ${err}`));

/*---------------------
MIDDLEWARE
---------------------*/
//templating
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

/*-------------------------------
HTML FORM ACCESS
-------------------------------*/
app.use(express.urlencoded({ extended: false }));

/*---------------------
ROUTES
---------------------*/
app.use('/', require('./routes/index'));

/*---------------------
PORT
---------------------*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listens to PORT ${PORT}`));

// express declaration
const express = require('express');
// this web application is working on port 8000
const port = 8000;
// database
const db = require('./config/mongoose');
const app = express();
// declaring expressLayout
const expressLayout = require('express-ejs-layouts');
// used for session  cookies
const session = require('express-session');
// passport for user authentication
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
// mongostore to store the user session in the mongodb database
const MongoStore = require('connect-mongo');
// urlencodede is used to create body object to the reqest url
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));
app.use(expressLayout);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
// mongo store is used to store the session cookie in the db
app.use(session({
    name : 'placementCell',
    // TODO change the secret before deploy
    secret:'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
          maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
          mongoUrl:'mongodb+srv://pydamnaidu:f2SlFQdV6HqlaiBu@PlacementCell.cjh6ckr.mongodb.net/PlacementCell',
          autoRemove:'disabled'
    },
    function(err){
          console.log(err || 'connect-mogodb setup ok');
    }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.serAuthenticatedUser);
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    
    console.log(`Success in connectin the server on port:${port}`);
})

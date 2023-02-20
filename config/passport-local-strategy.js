const { use } = require('passport');
const passport = require('passport');
const LocalStratergy = require('passport-local').Strategy;
const User = require('../models/user');



// autoathentication using passport
passport.use(new LocalStratergy({
    usernameField: 'empid',
    passReqToCallback: true
    },
    function(req, empid, password, done){
        // find a user and establish the identity
        User.findOne({empid: empid},function(err,user){
            if(err){
                // req.flash('error', err);
                return done(err);
            }

            if(!user || user.password != password){
                // req.flash('success', 'Invalid Username/Password');
                return done(null);
            }
            return done(null, user);
        });
    }
));

//   serializing the user to decide which key is to  be kept in the cookies
     passport.serializeUser(function(user, done){
        done(null,user.id);
     });

    //  deserializing the user from the key in the cookies
    passport.deserializeUser(function(id,done){
        User.findById(id, function(err,user){
        if(err){
            // console.log('Error in finding user --> passport');
            return done(err);
        }
        return done(null,user);

        });
    });
    // check if user is authenticated
    passport.checkAuthentication = function(req,res, next){
        // if the user is signed in
         if(req.isAuthenticated()){
              return next();
         }
        //   if the user is not signed in
         return res.redirect('users/sign_in');
    }
  passport.serAuthenticatedUser = function(req, res, next){
         if(req.isAuthenticated()){
        //   req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
            res.locals.user = req.user;
            
         }
         next();
  }
    module.exports = passport;
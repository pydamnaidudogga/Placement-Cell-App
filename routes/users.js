const express = require('express');
const router = express.Router();
const passport = require('passport')
const usersController = require('../controllers/users_controller');
// the below routera are used to signin & signup and create user  
router.get('/sign_in',usersController.signIn);
router.get('/sign_up',usersController.signUp);
router.get('/sign-out',usersController.destroySession);
router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign_in'},
), usersController.createSession);
router.get('/sign-out', usersController.destroySession);



module.exports = router;
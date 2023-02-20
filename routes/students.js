const express = require('express');
const router = express.Router();
const passport = require('passport');
const student = require('../controllers/addStdent');
const form = require('../controllers/form');
// the routers are used to showing the form for adding student
router.post('/addStudent',passport.checkAuthentication,student.create);
router.get('/viewForm',passport.checkAuthentication,form.view);




module.exports = router;
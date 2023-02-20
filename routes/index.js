const express = require('express');
const router = express.Router();
const passport = require('passport');
const home = require('../controllers/home');
const csv = require('../controllers/csv');
const interviewsController = require('../controllers/interviews');
// home page after the user is logedin
router.get('/',passport.checkAuthentication,home.home);
router.get('/home',passport.checkAuthentication,home.home);
// this router is used to get the students list
router.use('/students',require('./students'));
// this router is used to get the interview page
router.get('/interviews',passport.checkAuthentication,interviewsController.interviews);
router.use('/interviews',require('./interviews'));
router.use('/users',require('./users'));
const add_employee = require('../controllers/add_employe');
// this router is used to display the form for adding employee
router.post('/addEmploye',add_employee.addEmploye);
// this router is used to download the csv file 
router.get('/exporttocsv',passport.checkAuthentication,csv.export);

router.get('/viewForm',add_employee.viewForm);


module.exports = router;
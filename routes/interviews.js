const express = require('express');
const router = express.Router();
const addInt = require('../controllers/addInterview');
const form = require('../controllers/interviewForm');
const passport = require('passport');
const allocationForm = require('../controllers/students_allocation');
const students = require('../controllers/students_list_for_a_company');
// this router is used to add the interview into interviews 
router.post('/addInterview',passport.checkAuthentication,addInt.addInterview);
// this router is used to update the student interview result
router.post('/student/update',passport.checkAuthentication,students.update);
// this router is used to get the form for adding interview 
router.get('/viewForm',passport.checkAuthentication,form.form);
router.get('/allocationForm/:id',passport.checkAuthentication,allocationForm.allocationForm);
router.get('/allocationSuccess/:id',passport.checkAuthentication,allocationForm.allocate);
router.get('/students/:id',passport.checkAuthentication,students.students);


module.exports = router;
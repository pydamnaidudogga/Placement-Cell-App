const { response } = require("express")
const Student = require('../models/studentSchema');

module.exports.home = async function(req,res){
    const students = await Student.find({});
    // console.log(students);
    return res.render('home',{
        students:students
    });
}
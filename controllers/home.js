const { response } = require("express")
const Student = require('../models/studentSchema');

module.exports.home = async function(req,res){
    try {
        const students = await Student.find({});
    // console.log(students);
    return res.render('home',{
        students:students
    });
        
    } catch (error) {
        console.log(error);
        return;
    }
    
}
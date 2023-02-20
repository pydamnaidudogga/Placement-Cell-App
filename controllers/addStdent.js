const Student = require('../models/studentSchema');
module.exports.create = async function(req,res){
//    console.log(req.body);
// create the student
try {

    await Student.create(req.body);
   const students = await Student.find({});

    return res.render('home',{
        students:students
    });
    
} catch (error) {
    console.log(error);
    return;
}
   
}
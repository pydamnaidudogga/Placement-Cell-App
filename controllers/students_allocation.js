const Students = require('../models/studentSchema'); 
const Interviews = require('../models/interviewsSchema');
const Result = require('../models/results');
let temp ;
module.exports.allocationForm = async function(req,res){
    // console.log(req.params.id);
    let temp1 = [];
    const id = req.params.id;
    const interviews = await Interviews.findById({_id:id});
    temp = interviews;
    const students = await Students.find({});
    students.map((data)=>{
        let isPresent = true;
        temp.students.map((dataa)=>{
            if(data._id.valueOf()==dataa.valueOf()){
                isPresent=false;
            }
        });
        if(isPresent){
            temp1.push(data);
        }
    })
    // console.log(temp1);
    return res.render('students_for_allocation',{
        students:temp1
    });
} 
module.exports.allocate = async function(req,res){
    temp.students.push(req.params.id);
    // console.log(req.params.id);
    // console.log(temp.students);
       temp.save();
       await Result.create({student:req.params.id,company:temp._id});

      
    
    return  res.redirect('back');
}
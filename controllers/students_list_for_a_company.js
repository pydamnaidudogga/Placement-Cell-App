const Students = require('../models/studentSchema');
const Interviews = require('../models/interviewsSchema');
const Result = require('../models/results');
let req_interview ;
module.exports.students = async function(req,res){
    try {
        const interview = await Interviews.findById({_id:req.params.id});
    req_interview=interview;
    // const students = interview.students;

    // console.log(students);
    
    let result=[];
    const req_result= await Result.find({});
    const allStudents= await Students.find({});
        req_result.map((data)=>{
            
            if(data.company.valueOf()==req.params.id){
                allStudents.map((dataa)=>{
                    if(data.student.valueOf()==dataa._id.valueOf()){
                        dataa.status =data.result;
                      result.push(dataa);
                    }
                });
            }
                

        })
        // console.log(result);
        // console.log(allStudents);
    return res.render('list_of_all_students_for_company',{
        students:result
    });
    } catch (error) {
        console.log(error);
        return;
    }
    

}

module.exports.update = async function(req,res){
    try {
        const ans = req.body.options;
        const diff = ans.split('@');
        const interview_id = req_interview._id;
        const student_id = diff[1];
        const option = diff[0];
        const resultss = await Result.find({});
        // console.log(result);
        resultss.map((data)=>{
           if(data.student.valueOf()==student_id&&data.company.valueOf()==interview_id.valueOf()){
               data.result =option;
               data.save();
           }

        });
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return;
    }
    
}
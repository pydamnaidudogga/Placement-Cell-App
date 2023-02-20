const Student = require('../models/studentSchema');
const Objectstocsv = require('objects-to-csv');
const Result = require('../models/results');
const Interviews = require('../models/interviewsSchema');

module.exports.export = async function(req, res) {
    let result =[];
    
    const interviews = await Interviews.find({});
    const results = await Result.find({});
    const students = await Student.find({});
    results.map((resdata)=>{
      let isPresent=false;
      let obj = {
        studentId:'',studentName: 'Dogga pydamnaidu',studentCollege: 'Aditya degree college ',studentStatus:'',dsaFinalScore: 98,webdFinalScore: 95,reactFinalScore: 99,interviewDate:'',interviewCompany:'',interviewStudentResult:'',
      }
      interviews.map((intData)=>{
           if(resdata.company.valueOf()==intData._id.valueOf()){
              obj.interviewStudentResult=resdata.result;
              obj.interviewCompany=intData.name;
              obj.interviewDate=intData.date;
              isPresent=true;
              students.map((stdata)=>{
                if(resdata.student.valueOf()==stdata._id.valueOf()){
                  let temp = stdata._id.valueOf().toString();
                  obj.studentId=temp;
                  // obj.batch=date.batch;
                  obj.studentName=stdata.name;
                  obj.studentCollege=stdata.college;
                  obj.studentStatus=stdata.status;
                  obj.dsaFinalScore=stdata.dsascore;
                  obj.webdFinalScore=stdata.webscore;
                  obj.reactFinalScore=stdata.reactscore;
                }
        
              });
           }
      });
      
        if(isPresent){
          result.push(obj);
        }
    });
    
    const csv = new Objectstocsv(result);
    // console.log(students);
 
  // Save to file:
  await csv.toDisk('./results.csv');
 
  // Return the CSV file as string:
//   console.log(await csv.toString());
  return res.download('./results.csv');
 };
const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
      name :{
        type: String,
        require:true
      },
      date :{
        type:String
      },
      students:[
       {
         type:mongoose.Schema.Types.ObjectId,
         ref: 'Student'
       }
    ]
})


const Interview = mongoose.model('Interview',InterviewSchema);

module.exports = Interview;
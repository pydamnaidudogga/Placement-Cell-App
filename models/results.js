const mongoose = require('mongoose');

const  ResultSchema = new mongoose.Schema({
       
    student :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    company: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interview'
    },
    result : {
        type:String,
        enum:['PASS','FAIL','On Hold',"Didn't Attempt"],
        default:"Didn't Attempt",
        require:true

    }
})

const  Result = mongoose.model('Result',ResultSchema);

module.exports = Result;
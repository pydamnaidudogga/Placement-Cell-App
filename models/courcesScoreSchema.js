const mongoose = require('mongoose');
 
const courceSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    Score :{
        type:Number,
        require:true
    },
    student :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
})


const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    batch: {
        type:String,
        require:true

    },
    name :{
        type:String,
        require:true
    },
    college: {
        type:String,
        require:true
    },
    gender :{
        type:String,
        require:true
    },
    contact :{
        type:Number,
        require:true
    },
    email :{
        type:String,
        require:true
    },
    status :{
        type:String,
        enum:['placed','not_placed'],
        default:'not_placed'
    },
    
    dsascore :{
        type:Number,
        require:true

    },
    webscore :{
        type:Number,
        require:true
    },
    reactscore :{
        type:Number,
        require:true
    }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;
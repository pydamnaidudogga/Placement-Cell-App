const mongoose = require('mongoose');

const  AdminSchema = new mongoose.Schema({
       
    adminid :{
        type:Number,
        require:true
        
    },
    name : {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    contact: {
        type:String,
        require:true
    },
    password: {
        type: String,
        require:true
    }
})

const  Admin = mongoose.model('Admin',AdminSchema);

module.exports = Admin;
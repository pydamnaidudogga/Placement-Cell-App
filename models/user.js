
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    empid: {
        type:Number,
        unique:true,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
      type:Number,
      require:true
    },password : {
        type : String
    }
   

}, {
    timestamps: true
});



const User = mongoose.model('User', userSchema);

module.exports = User;
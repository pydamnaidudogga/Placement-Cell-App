const Admin = require('../models/main_admin');
const User = require('../models/user');
module.exports.addEmploye = async function(req,res){
  try {

    // finding the Admin in the data base with adminid
    const adId =await Admin.findOne({adminid:req.body.adminid});
    // console.log(adId);
    // checking the password
    if(adId&&adId.password==req.body.password){
    const us = await User.create({empid:req.body.empid,name:req.body.name,contact:req.body.contact,email:req.body.email});
 
    // const interview = await interviews.find({})
    return res.render('user_sign_up');
    }else{
      return res.redirect('back');
    }
    
  } catch (error) {
    console.log(error);
    return;
  }
 

}
module.exports.viewForm = function(req,res){
  return res.render('adding_employe');
}
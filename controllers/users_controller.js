const User = require('../models/user');
const Admin = require('../models/main_admin'); 


// render the sign up page
//  Admin.create({adminid:123456,name :"Dogga Pydamnaidu",email:"paidam360@gmail.com",contact:9133726921,password:"123@123"});
// const adm = User.find({});
// console.log(adm);

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/home');
    }


    return res.render('user_sign_up');
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('user_sign_in')
}

// get the sign up data
module.exports.create = function(req, res){
    // console.log(req.body);
    if (req.body.password != req.body.confirm_password){
    
        return res.redirect('back');
    }

    User.findOne({empid: req.body.empid}, function(err, user){
        if(err){ return}

        if (!user){
            return res.redirect('back');
           
        }else{
            user.password = req.body.password;
            user.save();
            

            return res.redirect('/users/sign_in');
                
        
            
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // req.flash('success', 'Logged in Successfully');
    return res.redirect('/home');
}

module.exports.destroySession = function(req, res){
    req.logout(function(err) {
        if (err) { return next(err); }
        // req.flash('success', 'You have logged out!');
       return res.redirect('/users/sign_in');
      });
    


    
}
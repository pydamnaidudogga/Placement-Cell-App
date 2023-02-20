const interviews = require('../models/interviewsSchema');
module.exports.interviews = async function(req,res){
 
    
      const interview = await interviews.find({})

      return res.render('interviews',{
        interview : interview
      })

}
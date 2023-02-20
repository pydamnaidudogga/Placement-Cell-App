const interviews = require('../models/interviewsSchema');
module.exports.interviews = async function(req,res){
  try {
    const interview = await interviews.find({})

      return res.render('interviews',{
        interview : interview
      })
  } catch (error) {
    console.log(error);
    return;
    
  }
    
      

}
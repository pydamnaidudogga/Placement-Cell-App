const interviews = require('../models/interviewsSchema');
module.exports.addInterview = async function(req,res){
    //  creating  the interview
    try {
      await interviews.create(req.body);
      return res.redirect("/interviews");
    } catch (error) {
      console.log(error);
      return;
    }
    
      // const interview = await interviews.find({})

      

}
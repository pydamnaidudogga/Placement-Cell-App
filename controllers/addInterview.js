const interviews = require('../models/interviewsSchema');
module.exports.addInterview = async function(req,res){
    //  creating  the interview
    await interviews.create(req.body);
      // const interview = await interviews.find({})

      return res.redirect("/interviews");

}
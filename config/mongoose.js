const mongoose = require('mongoose');
// const uri = 'mongodb://127.0.0.1/placement_cell';
const uri = "mongodb+srv://pydamnaidu:wFkEtwmASsquWhOH@Vaccine.cjh6ckr.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);
mongoose.connect(uri,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to the mongoodb"));
db.once('open',function(){
    console.log('success in conecting to the mongoDB');
});

module.exports = db;

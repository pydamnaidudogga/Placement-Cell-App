const mongoose = require('mongoose');
// const uri = 'mongodb://localhost/placement_cell';
const uri = "mongodb+srv://pydamnaidu:D1OBXUD9rcUXnqwn@database.cjh6ckr.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);
mongoose.connect(uri,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to the mongoodb"));
db.once('open',function(){
    console.log('success in conecting to the mongoDB');
});

module.exports = db;

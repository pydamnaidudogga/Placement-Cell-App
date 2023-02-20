const mongoose = require('mongoose');
// const uri = 'mongodb://localhost/placement_cell';
const uri = "mongodb+srv://pydamnaidu:T3qby2N9N0lOaMyq@cluster0.22bxq8o.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);
mongoose.connect(uri,{useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to the mongoodb"));
db.once('open',function(){
    console.log('success in conecting to the mongoDB');

});

module.exports = db;
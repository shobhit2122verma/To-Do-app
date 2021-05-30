const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/to_do_list_db');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to database'));


db.once('open',function(){
    console.log('successfully connected to database');
});
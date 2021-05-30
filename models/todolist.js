const mongoose=require('mongoose');

const listSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        required:true
    }
});

const todolist=mongoose.model('todolist',listSchema);
module.exports = todolist;
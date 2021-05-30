const db=require('./config/mongoose.js');
const todolist=require('./models/todolist');
const express=require('express');//step1
const port=8080;//step2
const path=require('path');
const process = require('process');
const app=express();//step 3
var taskList=[];
app.set('view engine','ejs');//step 5 first we tell about the view engine that we are going to use
app.set('views',path.join(__dirname,'views'));//step 6 here we join the path where we are setting up our view engine
app.use(express.urlencoded());
app.post('/addtask',function(req,res){
    todolist.create({
        task:req.body.task,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newlist){
        if(err){
            console.log('error adding the schedule');
            return;
        }
        console.log('added schedule' ,newlist);
        return res.redirect('back');
    })
});

app.get('/deletetask',function(req,res){
    let task=req.query.Task;
    let taskIndex=taskList.findIndex(checktask => (checktask==task));
    if(taskIndex!=-1)
    {
        taskList.splice(taskIndex,1);
        return res.redirect('back');
    }
});

app.get('/',function(req,res){
    todolist.find({},function(err,todolist){
        if(err){
            conosole.log("error getting data from the database");
            return;
        }
        return res.render('home',{
            title:'To-Do-List',
            tasklist:todolist
        });
    })
});
//now here we have add the serve to the database
app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('Express server is running on port',port);
});//step 4
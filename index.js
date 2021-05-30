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
    taskList.push(req.body.task);
    return res.redirect('back');
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
    return res.render('home',{
        title:'To-do List',
        tasklist:taskList
    });
});
app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('Express server is running on port',port);
});//step 4
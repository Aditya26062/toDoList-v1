const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
console.log(date.getDay());
let items = [];
let workItems = [];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
     let day = date.getDate();
    res.render("list.ejs",{listTitle:day,listItems : items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list = "Work"){
        workItems.push(item);
        res.redirect("/work");
    } 
    else{
        items.push(item);
        res.redirect("/");
    }
    //console.log(req.body);
});

app.get("/work",function(req,res){
    res.render("list.ejs",{listTitle:"Work List",listItems:workItems});
});


app.listen(3000,function(){
    console.log("server started at port 3000");
});
 //jshint esversion:6
 const express = require("express");
 const bodyParser = require("body-parser");
 const date = require(__dirname + "/date.js");
 const app = express();

const items=["Do Your Project","Do some code"];

const workItems = [];

 app.set("view engine","ejs");
 app.use(bodyParser.urlencoded({extended: true}));

 app.use(express.static("public"));

 app.get("/", function(req,res){

    let day = date.getDate();
    res.render("list",{
        listTitle: day, 
        //description : des,
        newListItems: items
    });

    app.post("/", function(req,res) {
        let item=req.body.add;
         if(req.body.list === "Work List"){
            workItems.push(item);
            res.redirect("/work");
         } else{
            items.push(item);
            res.redirect("/");
         }
         console.log(req.body.list);
    });


    app.get("/work", function (req,res) {
        res.render("list",{listTitle: "Work List", newListItems: workItems})
    })
    app.post("/work",function(req,res){
        const item = req.body.add;
        workItems
    })

    app.get("/about", function(req,res){
        res.render("about");
    })
    
    
 });

 app.listen(3000, function(){
    console.log("Server started on port 3000");
 });
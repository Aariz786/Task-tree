const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

var item_array = ["hi","not"];
app.get("/",function(req,res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US",options);
  res.render("index" ,{ejsday:day,itemarr:item_array});
});

app.post("/",function(req,res){
  var newitem = req.body.newitem;
  item_array.push(newitem);
  res.redirect("/");
})
app.listen(3000,function(){
  console.log("working");
})

// jshint version 6

const express = require("express");

// to use body
const bodyParser = require("body-parser");

const app = express();

const date = require(__dirname + "/date.js");


// console.log(date());
// we can add elements(.push) still using constant value
const items = ["Buy food", "Cook food","Eat food"];
const workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {




  // return the day of the week
  // var currentDay = today.getDay();
  // var day = "";

// if root
  // if (currentDay == 0) {
  //   day = "Sunday";
  //   // list is inside the views folder
  //   // we are passing the variable that has the name of kindOfDay inside listen
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else if (currentDay == 1) {
  //   day = "Monday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else if (currentDay == 2) {
  //   day = "Tuesday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else if (currentDay == 3) {
  //   day = "Wednesday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else if (currentDay == 4) {
  //   day = "Thursday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else if (currentDay == 5) {
  //   day = "Friday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // } else {
  //   day = "Saturday";
  //   res.render("list", {
  //     kindOfDay: day
  //   });
  // }

// Switch
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   // for debugging
  //     console.log("Error: current day is equal to: " + currentDay);
  // }

  // call function of getDate in date.js
  let day = date.getDate();

  res.render("list",{listTitle:day, newListItem:items});
});

app.post("/",function(req,res){

   // console.log(req.body);

   item =req.body.newItem;

   if(req.body.list === "Work"){
     workItems.push(item);

     // go back to  /work
     res.redirect("/work");
   }

   else{
     items.push(item);

     // go back to the home root
     // go back to the app.get
      res.redirect("/");
   }





});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItem: workItems});
});

app.post("/work",function(req,res){
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server is runninig on port 3000.");
});

const hbs = require("hbs");
const express = require("express");
const path = require("path");
const app = new express();
const port = process.env.PORT || 3000;

//public static path : public m jo bhi kuch h usko access kerenge
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); //1
app.set("views", template_path); //2
hbs.registerPartials(partials_path); //3

app.use(express.static(static_path));//0

//routing without templates/views and templates/views
// app.get("",(req,res)=>{
//     res.send("welcome to weathere app")
// })
// app.get("/about",(req,res)=>{
//     res.send("welcome to weathere app : about us page")
// })
// app.get("/weather",(req,res)=>{
//     res.send("welcome to weathere app : weather page")
// })
// app.get("*",(req,res)=>{
//     res.send("404 error page not found")
// })

// #############3 routing 2 by hbs ###########
app.get("/", (req, res) => {
  res.render("index.hbs"); //index.hbs optional
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/weather", (req, res) => {
  res.render("weather.hbs");
});
app.get("/about-me", (req, res) => {
  res.render("about-me.hbs",{
    coming:"PORTFOLIO WEBSITE UNDER CONSTRUCTION"
  });
});
app.get("*", (req, res) => {
  res.render("404error",{
    errormsg:"OOPS! PAGE NOT FOUND"
  });
});

//listening port
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});

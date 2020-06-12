const app = require("express")();

app.set("view engine", "ejs");
app.get("/", (req, res)=>{
  res.render("home");
});
app.get("/about", (req, res)=>{
  res.render("about");
});
app.get("*", (req, res)=>{
  res.send("<h1>This page is like your girlfriend, It doesn't exist</h1>");
});
app.listen(process.env.PORT || 80, function(){
  console.log("server started")
});
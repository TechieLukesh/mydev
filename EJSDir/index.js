const express = require("express");
const app = express();

const port = 8080;

// set the view engine to ejs

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("This is home");
  // use res.render for ejs
  res.render("home.ejs");
});

// jaha se server run hota hai, wahi views dir dekhta hai

// to fix it
// require the path
//add this
// app.set("views", path.join(__dirname, "/views"));

app.get("/hello", (req, res) => {
  res.send("Hello");
});
//callback

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("You contacted orange path");
});

app.get("/guava", (req, res) => {
  res.send("You contacted guava path");
});

app.use((req, res) => {
  res.status(404).send("This route is invalid!");
});

// app.use((req, res) => {
//   console.log(req);
//   console.log("Request Received");
//   let code = "<h1>Fruits</h1> <ul><li>Apple<li/><li>Orange<li/><ul/>";
//   res.send(code);
// });

const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

// custom username like instagram/eleonmusk
// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   // console.log(req.params);
//   // res.send(`Welcome to the page of @${username}.`);
//   let code = `<h1>Welcome to the page of @${username}</h1>`;
//   res.send(code);
// });

// search query
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) res.send("Nothing searched");
  res.send(`Search result for query: ${q}`);
  // console.log(req.query);
  // res.send("No Results");
});

// app.get("/apple", (req, res) => {
//   res.send("You contacted apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("You contacted orange path");
// });

// app.get("/guava", (req, res) => {
//   res.send("You contacted guava path");
// });

//handles rest of the pages
// app.use((req, res) => {
//   res.status(404).send("This route is invalid!");
// });

// sends html code as a response
// app.use((req, res) => {
//   console.log(req);
//   console.log("Request Received");
//   let code = "<h1>Fruits</h1> <ul><li>Apple<li/><li>Orange<li/><ul/>";
//   res.send(code);
// });

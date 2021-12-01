const express = require("express");
const port = process.env.port || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/greetings", (req, res) => {
  res.send("Hi there");
});


app.listen(port, () => {
  console.log("Our App Is Up And Running!");
});
module.exports = app;

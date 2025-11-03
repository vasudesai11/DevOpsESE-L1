const express = require("express");
const app = express();
const port = 3000;

let yesVotes = 0;
let noVotes = 0;

app.get("/", (req, res) => {
  res.send(`
    <h1>Polling App</h1>
    <p>Do you like DevOps?</p>
    <button onclick="fetch('/vote/yes')">Yes</button>
    <button onclick="fetch('/vote/no')">No</button>
    <p>Yes: ${yesVotes} | No: ${noVotes}</p>
  `);
});

app.get("/vote/:option", (req, res) => {
  const option = req.params.option;
  if (option === "yes") yesVotes++;
  else if (option === "no") noVotes++;
  res.redirect("/");
});

app.listen(port, () => console.log(`Polling app running on port ${port}`));

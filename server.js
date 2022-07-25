const express = require("express");
const axios = require("axios").default;
const app = express();
const port = 3001;
const path = require("path");
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, function () {
  console.log(`port: ${port}`);
});
const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};
let players = [];
axios.get("http://data.nba.net/10s/prod/v1/2018/players.json").then((res) => {
  players = res.data.league.standard;
});

app.get("/teams/:teamName", function (req, res) {
  const teamName = req.params.teamName;
  let playersFiltered = players.filter((player) => {
    player.image = `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`;
    return player.teamId == teamToIDs[teamName];
  });
  console.log(playersFiltered);
  res.send(playersFiltered);
});

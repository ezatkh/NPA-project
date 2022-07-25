const axios = require("axios").default;
const express = require("express");
const router = express.Router();
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

router.get("/teams/:teamName", function (req, res) {
  const teamName = req.params.teamName;
  let playersFiltered = players.filter((player) => {
    player.image = `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`;
    return player.teamId == teamToIDs[teamName];
  });
  console.log(playersFiltered);
  res.send(playersFiltered);
});

module.exports = router;

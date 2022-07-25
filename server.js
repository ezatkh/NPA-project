const express = require("express");
const api = require("./root/routes/api.js");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/", api);

const port = 3001;
app.listen(port, function () {
  console.log(`port: ${port}`);
});

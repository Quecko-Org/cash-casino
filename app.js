require("dotenv").config();
const express = require("express");
const { initRoutes } = require("./src/router");
const app = express();

(async () => {
 
  require("./helper/db");
 
})();
app.use(express.json());           
app.use(express.urlencoded({ extended: true }));
// set ejs view engine
// app.set("view engine", "ejs");

// initialize routes
initRoutes(app);

module.exports = app;

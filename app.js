require("dotenv").config();
const express = require("express");
const { initRoutes } = require("./src/router");
const cors = require("cors");

const app = express();

(async () => {
 
  require("./helper/db");
 
})();
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://dev.cashcasino.gg",  // if your production frontend exists
    ],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true
  })
);

app.use(express.json());           
app.use(express.urlencoded({ extended: true }));
// set ejs view engine
// app.set("view engine", "ejs");

// initialize routes
initRoutes(app);

module.exports = app;

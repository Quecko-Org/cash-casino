require("dotenv").config();
const express = require("express");
const { initRoutes } = require("./src/router");
const cors = require("cors");

const app = express();

(async () => {
 
  require("./helper/db");
 
})();
app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true
}));

app.use(express.json());           
app.use(express.urlencoded({ extended: true }));
// set ejs view engine
// app.set("view engine", "ejs");

// initialize routes
initRoutes(app);

module.exports = app;

const express = require("express");
const app = express();

const serverless = require("serverless-http");

const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const router = express.Router();

router.get("*", (req, res) => {
  res.json({
    message:
      "Welcome to the backend, this place is currently under construction 🔨",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);

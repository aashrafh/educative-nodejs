require("dotenv").config();
require("./database/database.js").connect();
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const router = require("./routes/index");
const auth = require("./middleware/auth");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(favicon(__dirname + "/frontend/build/favicon.ico"));
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", router);

app.get("/hello", (req, res) => {
  res.send("Hello 🙌 ");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);

require("dotenv").config();
require("./database/database.js").connect();
const express = require("express");
const router = require("./routes/index");
const auth = require("./middleware/auth");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
app.use("/uploads", express.static("./uploads"));
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("/", (req, res) => {
  res.send({ message: "Hello, nodemon!" });
});

app.post("/hello", auth, (req, res) => {
  res.status(200).send("Hello 🙌 ");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`app is listening at http://0.0.0.0:${port}`);
});

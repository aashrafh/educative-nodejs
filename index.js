require("dotenv").config();
require("./database/database.js").connect();
const express = require("express");
const router = require("./routes/index");
const auth = require("./middleware/auth");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("./uploads"));
// app.use(express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send({ message: "Hello, nodemon!" });
});

app.post("/hello", auth, (req, res) => {
  res.status(200).send("Hello 🙌 ");
});

// Register the application main router
app.use("/", router);

app.listen(port, () =>
  console.log(`app is listening at http://0.0.0.0:${port}`)
);

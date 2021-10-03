const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send({ message: "Hello, nodemon!" });
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});

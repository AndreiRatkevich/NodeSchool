const express = require("express");
const app = express();
const port = process.argv[2];

app.use(express.urlencoded({ extended: false }));
app
  .post("/form", (req, res) =>
    res.send(req.body.str.split("").reverse().join(""))
  )
  .listen(port);

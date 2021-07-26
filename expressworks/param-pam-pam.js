const express = require("express");
const app = express();
const port = process.argv[2];

app
  .put("/message/:id", (req, res) => {
    const id = req.params.id;
    const crypto = require("crypto")
      .createHash("sha1")
      .update(new Date().toDateString() + id)
      .digest("hex");
    res.send(crypto);
  })
  .listen(port);

const path = require("path");
const express = require("express");
const app = express();
const port = process.argv[2];

app
  .use(express.static(process.argv[3] || path.join(__dirname, "public")))
  .listen(port);

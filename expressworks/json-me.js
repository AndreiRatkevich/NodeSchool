const express = require("express");
const app = express();
const fs = require("fs");
const port = process.argv[2];

app
  .get("/books", (req, res) => {
    fs.readFile(process.argv[3], (e, data) => {
      if (e) return res.sendStatus(500);
      let books;
      try {
        books = JSON.parse(data);
      } catch (e) {
        res.sendStatus(500);
      }
      res.json(books);
    });
  })
  .listen(port);

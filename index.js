const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "pug");
app.use(express.static('src'));
app.use((req, res) => {
  res.render('index');
});

app.listen(8000);

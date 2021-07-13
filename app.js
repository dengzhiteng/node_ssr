const express = require("express");
const app = express();
const path = require("path");

const nunjucks = require("nunjucks");

// 实现静态资源托管
app.use("/public", express.static(path.join(__dirname, "/public/")));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", function (req, res, next) {
  res.status(200).render("index.html");
});
app.listen(3000, () => {});

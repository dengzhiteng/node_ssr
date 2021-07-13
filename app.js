const express = require("express");
const app = express();
const path = require("path");
const nunjucks = require("nunjucks");

// 实现静态资源托管
app.use("/public", express.static(path.join(__dirname, "/public/")));
app.use(
  "/node_modules/",
  express.static(path.join(__dirname, "./node_modules/"))
);

app.use(express.json()); // application/json 格式的数据 {key: value, key: value...}
app.use(
  express.urlencoded({
    extended: true,
  })
); // application/x-www-form-urlencoded key=value&key=value...

const env = nunjucks.configure(path.join(__dirname, "./views/"), {
  autoescape: true,
  express: app,
  watch: true, // 启动模板文件监视，文件改变，重新预编译，建议开发阶段开启此功能
});

app.get("/", function (req, res, next) {
  res.render("index.html");
});
app.get("/people-home", function (req, res, next) {
  res.render("people-home.html");
});
app.listen(3000, () => {});

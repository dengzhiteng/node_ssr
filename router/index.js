const express = require("express");
let router = express.Router();
const indexCtro= require("../controller");

router
.get('/', indexCtro.showIndex)
    .get('/people/home.html', indexCtro.peopleHome)
    .get('/login.html',indexCtro.login)
    .post('/signup', indexCtro.signup)
    .get('/captcha', indexCtro.captcha)

module.exports = router;
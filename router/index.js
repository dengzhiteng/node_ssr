const express = require("express");
let router = express.Router();
const indexCtro= require("../controller");
console.log(indexCtro);

router
.get('/', indexCtro.showIndex)
    .get('/people/home.html', indexCtro.peopleHome)
    .get('/login',indexCtro.login)

module.exports = router;
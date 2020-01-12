var express = require("express");
var router = express.Router(); //Router is simply a way for you to reorganize your routes vs using app.get immediately.
//app.router allows you to define your routes separately and simply use it in your app. It provides a nice separation of concerns.
const controllers = require("../controller/article");
router.get("/", controllers.getAllArticles);

module.exports = router;

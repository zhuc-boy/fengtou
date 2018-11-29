var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  
  if (req.cookies==null) {
    res.redirect("login", { title: "登陆" });
  } else {
    res.render("home", { title: "Express", user: { username: "wang" } });
  }
});
router.get("/login", function(req, res, next) {
  res.render("login", { title: "登陆" });
});

module.exports = router;

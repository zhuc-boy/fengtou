var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.cookie == undefined) {
    res.redirect("/login");
  } else {
    res.render("home", { title: "Express", user: { username: "wang" } });
  }
});


module.exports = router;

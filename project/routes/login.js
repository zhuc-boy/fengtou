var express = require("express");
var router = express.Router();

router.post("/login", function(req, res, callback) {
  if (req.body.username && req.body.pwd) {
    res.render("home", { user: { username: req.body.username } });
  }
  //res.render("login", { title: "登陆" });
  /*if(res.body.username||res.body.pwd){

  }else{
    return
  }*/
});
router.get("/login", function(req, res, next) {
  res.render("login", { title: "登陆" });
});
module.exports = router;

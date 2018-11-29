var express = require('express');
var router = express.Router();

router.post("/login", (req, res, callback) => {
  res.render("login", { title: "登陆" });
});
module.exports = router;
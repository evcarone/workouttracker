const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(_dirname, "./public/index.html"))
});

module.exports = router;

var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

router.get("/resume", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../public/Assets/Resume.pdf"));
});

module.exports = router;

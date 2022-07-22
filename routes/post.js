const express = require("express");
const router = express.Router();
const post = require("../controllers/posts_ctrl");
const passport = require("../config/passport-local");

router.post("/create", passport.checkAuthentication, post.create);
router.get("/delete/:id", passport.checkAuthentication, post.delete);
router.get("/edit/:id", post.edit);
router.post("/update/:id", post.update);

module.exports = router;

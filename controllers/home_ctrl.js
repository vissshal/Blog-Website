const Post = require("../models/blogs");
const User = require("../models/user");

module.exports.home = function (req, res) {
  //console.log(req.cookies);

  Post.find({}) // yahan arguement me "user: req.user._id" nahi denge to wo sara posts find krke show krega and using population uske respective owner ka details v fetch krega together
    .populate("user")

    .exec(function (err, post) {
      if (err) {
        console.log(err);
        return;
      }

      User.find({}, function (err, users) {
        if (err) {
          console.log(err);
          return;
        }
        return res.render("home", {
          title: "Blog || Home ",
          post: post.reverse(),
          users: users,
        });
      });
    });
};

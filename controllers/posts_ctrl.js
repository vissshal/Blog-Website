const User = require("../models/user");
const Post = require("../models/blogs");

module.exports.new = function (req, res) {
  return res.render("new");
};

module.exports.create = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      title: req.body.title,
      user: req.user._id,
      // req.user contains all the details of the current signed in user from the session cookie in JSON format
    },
    function (err, post) {
      if (err) {
        console.log(err);
        return;
      }
      res.redirect("/");
    }
  );
};

module.exports.delete = function (req, res) {
  Post.findByIdAndDelete(req.params.id, function (err, post) {
    if (err) {
      console.log(err);
    }
    return res.redirect("/");
  });
};

module.exports.edit = function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) {
      console.log(err);
    }

    return res.render("edit", { post: post });
  });
};

module.exports.update = function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) {
      console.log(err);
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.save();

    return res.redirect("/");
  });
};

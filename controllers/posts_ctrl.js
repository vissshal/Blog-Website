const User = require("../models/user");
const Post = require("../models/blogs");

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

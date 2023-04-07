const User = require("../models/user");

exports.createUser = async (req, res) => {
  if (!req.body.Username || !req.body.City || !req.body.Friend) {
    return res.status(422).json({
	  Uid: "Uid is required",	
      Username: "username is required",
      City: "city is required",
      Friend: "friend is required",
    });
  }
  console.log(req.body);
  const user = new User(req.body);
  User.create(user, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};
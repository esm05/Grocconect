const passport = require("passport");
const mongoose = require("mongoose");
//const User = mongoose.model("users");
const User = require('../models/users');
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  const token = user.generateJwt();
  try {
    const q = await user.save();
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
const login = (req, res) => {
    // Validate message to ensure that email and password are present 
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Delegate authentication to passport module
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return res.status(404).json(err);
    }
    if (user) {   // Auth succeeded - generate JWT and return to caller 
      const token = user.generateJwt();
      res.status(200).json({ token });
    } else {       // Auth failed return error 
      res.status(401).json(info);
    }
  })(req, res);
};
module.exports = {
  register,
  login,
};
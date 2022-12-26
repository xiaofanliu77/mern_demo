const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const gravator = require("gravatar");
const bcrypt = require("bcryptjs");

const User = require("../../models/User"); //import user model

// @route GET api/users
// @desc Test route
// @access Public (do not need a token)
router.post(
  "/",
  // check request body has all necessary info and are correctly formatted
  body("name", "Name is required").notEmpty(),
  body("email", "Please include a valid email").isEmail(),
  body(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] }); //400: bad request
      }

      // Get users gravator
      const avatar = gravator.url(email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm", //default image
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return jsonwebtoken, to log a user in after registration

      // console.log(req.body);
      res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

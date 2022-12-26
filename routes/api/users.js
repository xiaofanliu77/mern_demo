const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;

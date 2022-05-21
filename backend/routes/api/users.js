const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

// backend/routes/api/users.js
// ...
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];



//Sign up a user
router.post('/signup', validateSignup, async (req, res, next) => {

  const { email, firstName, lastName, password, username } = req.body;

   const checkUser = await User.findOne({
        where: {
          email,
        }
      })

      if(checkUser) {
        const error = new Error('Email already exists')
        error.status = 403
        return next(error)
      }

    let user = await User.signup({ firstName, lastName, username, email, password});

    const token = setTokenCookie(res, user);
    user = user.toSafeObject()
    return res.json({
      user,
      token,
    });

  }
);


module.exports = router;

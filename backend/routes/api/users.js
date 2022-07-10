const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')

// backend/routes/api/users.js
// ...
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email is required'),
  check('email')
    .isEmail()
    .withMessage('Invalid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Username is required'),
  check('username')
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
    check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('First name is required'),
    check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Last name is required'),
  handleValidationErrors
];



//Sign up a user //////added test for amazon s3 to add image to previewImage
router.post('/signup', singleMulterUpload("image") ,validateSignup, async (req, res, next) => {

  const { email, firstName, lastName, password, username, previewImage } = req.body;
  // const previewImage = await singlePublicFileUpload(req.file)

   const checkEmail = await User.findOne({ where: { email, }  })
   const checkUsername = await User.findOne({ where: { username } })

      if(checkEmail) {
        const error = new Error('User already exists')
        error.status = 403
        error.errors = 'User with that email already exists'
        return next(error)
      }

      if (checkUsername) {
        const error = new Error('User already exists')
        error.status = 403
        error.errors = 'User with that username already exists'
        return next(error)
      }

    let user = await User.signup({ firstName, lastName, username, email, password, previewImage,});

    const token = setTokenCookie(res, user);
    user = user.toSafeObject()

    return res.json({
      user,
      token,
    });
  }
);

router.get('/', async (req, res) => {
  const allUsers = await User.findAll()
  res.json(allUsers)
})


module.exports = router;

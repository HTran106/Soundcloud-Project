const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { jwtConfig } = require('../../config');
const user = require('../../db/models/user');

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];



router.get('/info', requireAuth, restoreUser, async (req, res, next) => {
    const { user, cookies } = req;

    const info = user.toSafeObject()

    res.json({
      user: info,
      token: cookies.token
    })
})

module.exports = router

const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album, Playlist } = require('../../db/models');
const { jwtConfig } = require('../../config');


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

//Get all Albums created by the Current User
router.get('/albums', requireAuth, restoreUser, async (req, res) => {
  const { user } = req;

  const albums = await Album.findAll({
    where: {
      userId: user.id
    }
  })

  res.json(albums)
})

//Get all Songs created by current User
router.get('/songs', requireAuth, restoreUser, async (req, res) => {
  const { user } = req;

  const songs = await Song.findAll({
    where: {
      userId: user.id
    }
  })
  res.json(songs)
})

//get all info on current user
router.get('/info', requireAuth, restoreUser, async (req, res) => {
    const { user, cookies } = req;

    const info = user.toSafeObject()

    res.json({
      user: info,
      token: cookies.token
    })
})

//Get playlist created by current user
router.get('/playlists', requireAuth, restoreUser, async (req, res) => {
  const { user } = req;

  const playlist = await Playlist.findAll({
    where: {
      userId: user.id
    }
  })

  res.json(playlist)
})

module.exports = router

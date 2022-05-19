const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { jwtConfig } = require('../../config');


//Get all songs
router.get('/', async (req, res) => {
    const songs = await Song.findAll()

    res.json(songs)
})


module.exports = router

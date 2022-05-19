const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { jwtConfig } = require('../../config');





//Get song from songId
router.get('/:songId', async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId, {
        include: [
            {
                model: User,
                as: 'Artist',
                attributes: ['id', 'username', 'previewImage']
            },
            {
                model: Album,
                attributes: ['id', 'title', 'previewImage']
            }
        ]
    })

    if (song) {
        res.json(song)
    } else {
        const error = new Error('Song does not exist');
        error.status = 404;
        return next(error)
    }
})

//Get all songs
router.get('/', async (req, res) => {
    const songs = await Song.findAll()

    res.json(songs)
})


module.exports = router

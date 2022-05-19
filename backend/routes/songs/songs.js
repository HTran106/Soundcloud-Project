const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { jwtConfig } = require('../../config');



//Delete song by songId   ////////DOES NOT DELETE FROM DATABASE
router.delete('/:songId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { songId } = req.params;

    const song = await Song.findByPk(songId)
    res.json(song)
    song.destroy()
    res.json(song)
    // song.destroy({
    //     force: true
    // })
    // res.json({msg: 'song is destroyed'})
    // if (song) {
    //     if (song.userId === user.id) {
    //         song.destroy();
    //         res.json({msg: 'Successfully deleted'})
    //     } else {
    //         const err = new Error('Not authorized');
    //         err.status = 401;
    //         return next(err)
    //     }
    // } else {
    //     const err = new Error('Song does not exist')
    //     err.status = 404;
    //     return next(err)
    // }
})


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

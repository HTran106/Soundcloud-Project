const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { jwtConfig } = require('../../config');

//Get all Albums
router.get('/', async (req, res) => {
    const allAlbums = await Album.findAll()

    res.json(allAlbums)
})

//Add song to album by ID
router.post('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params
    const { title, description, url, previewImage } = req.body

    const album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            const newSong = await Song.create({
                albumId,
                userId: user.id,
                title,
                description,
                url,
                previewImage
            })
            res.json(newSong)
        }
    } else {
        const error = new Error('Album does not exist')
        error.status = 404
        return next(error)
    }

})

//Create a Song for an Album based on albums Id


module.exports = router

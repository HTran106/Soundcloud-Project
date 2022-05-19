const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album, sequelize } = require('../../db/models');
const { jwtConfig } = require('../../config');





//Get all albums of an artist based on the artist ID
router.get('/:userId/albums', async (req, res, next) => {
    const { userId } = req.params;

    const artist = await User.findByPk(userId)

    if (artist) {
        const albums = await Album.findAll({where: {userId,}})
        res.json(albums)
    } else {
        const err = new Error('Artist does not exist')
        err.title = 'Artist does not exist'
        err.status = 404;
        return next(err)
    }
})

//Get all Songs of an artist based on ID
router.get('/:userId/songs', async (req, res, next) => {
    const { userId } = req.params;


    const artist = await User.findByPk(userId)


    if (artist) {
        const allSongs = await Song.findAll({
            where: {userId,}
        })

        res.json(allSongs)
    } else {
        const err = new Error('Artist does not exist');
        err.title = 'Artist does not exist';
        err.status = 404;
        return next(err)
    }

})

//get details of an Artist from ID
router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    const totalSongs = await Song.count()
    const totalAlbums = await Album.count()

    const artist = await User.findByPk(userId, {
        attributes: ['id', 'username', ], //still need to add previewImage //////have to merge other 2 routes to dev first
    })

    if (artist) {
        res.json({artist, totalSongs, totalAlbums,})
    } else {
        const err = new Error('Artist does not exist');
        err.title = 'Artist does not exist';
        err.status = 404;
        return next(err)
    }

})

module.exports = router

const express = require('express')
const router = express.Router();
const { doesNotExist } = require('../../utils/auth');
const { validatePagination, pagination } = require('../../utils/validation')
const { User, Song, Album, Playlist, sequelize } = require('../../db/models');






//Get all playlists of an artist based on ID
router.get('/:userId/playlists', validatePagination ,async (req, res, next) => {
    const { userId } = req.params;
    let { page, size } = req.query;

    if (!size) size = 20
    if (!page) page = 0

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 0 : page = page
    size > 20 ? size = 20 : size = size

    const artist = await User.findByPk(userId)

    if (artist) {
        const playlists = await Playlist.findAll({
            where: { userId, },
            ...pagination(page, size)
        })
        res.json({
            Playlists: playlists,
            page,
            size,
        })
    } else {
        doesNotExist(next, 'Artist')
    }
})


//Get all albums of an artist based on the artist ID
router.get('/:userId/albums', validatePagination ,async (req, res, next) => {
    const { userId } = req.params;
    let { page, size } = req.query;

    if (!size) size = 20
    if (!page) page = 0

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 0 : page = page
    size > 20 ? size = 20 : size = size

    const artist = await User.findByPk(userId)

    if (artist) {
        const albums = await Album.findAll({
            where: { userId, },
            ...pagination(page, size)
        })
        res.json({
            Albums: albums,
            page,
            size
        })
    } else {
        doesNotExist(next, 'Artist')
    }
})

//Get all Songs of an artist based on ID
router.get('/:userId/songs', validatePagination ,async (req, res, next) => {
    const { userId } = req.params;
    let { page, size } = req.query;

    if (!size) size = 20
    if (!page) page = 0

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 0 : page = page
    size > 20 ? size = 20 : size = size

    const artist = await User.findByPk(userId)

    if (artist) {
        const allSongs = await Song.findAll({
            where: {userId,},
            ...pagination(page, size)
        })

        res.json({
            Songs: allSongs,
            page,
            size,
        })
    } else {
        doesNotExist(next, 'Artist')
    }

})

//get details of an Artist from ID
router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    const totalSongs = await Song.count({where: {userId,}})
    const totalAlbums = await Album.count({where: {userId,}})

    const artist = await User.findByPk(userId, {
        attributes: ['id', 'username', 'previewImage']
    })


    if (artist) {
        res.json({
            id: artist.id,
            username: artist.username,
            totalSongs,
            totalAlbums,
            previewImage: artist.previewImage
        })
    } else {
        doesNotExist(next, 'Artist')
    }

})

module.exports = router

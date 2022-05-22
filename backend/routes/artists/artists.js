const express = require('express')
const router = express.Router();
const { doesNotExist } = require('../../utils/auth');
const { User, Song, Album, Playlist } = require('../../db/models');




//Get all playlists of an artist based on ID
router.get('/:userId/playlists', async (req, res, next) => {
    const { userId } = req.params;

    const artist = await User.findByPk(userId)

    if (artist) {
        const playlists = await Playlist.findAll({where: { userId, }})
        res.json({ Playlists: playlists})
    } else {
        doesNotExist(next, 'Artist')
    }
})


//Get all albums of an artist based on the artist ID
router.get('/:userId/albums', async (req, res, next) => {
    const { userId } = req.params;

    const artist = await User.findByPk(userId)

    if (artist) {
        const albums = await Album.findAll({where: { userId, }})
        res.json({ Albums: albums })
    } else {
        doesNotExist(next, 'Artist')
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

        res.json({ Songs: allSongs})
    } else {
        doesNotExist(next, 'Artist')
    }

})

//get details of an Artist from ID
router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    const totalSongs = await Song.count({where: {
        userId,
    }})
    const totalAlbums = await Album.count({where: {
        userId,
    }})

    const artist = await User.findByPk(userId, {
        attributes: ['id', 'username', 'previewImage'],
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

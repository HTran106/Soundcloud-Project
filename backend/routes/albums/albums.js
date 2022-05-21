const express = require('express')
const { check } = require('express-validator')
const router = express.Router();
const { unauthorized, requireAuth, restoreUser, doesNotExist } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { songValidator, albumValidator } = require('../../utils/validation');


//Delete album by albumId
router.delete('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId);

    if (album) {
        if (album.userId === user.id) {
            await album.destroy();
            res.json({msg: 'Successfully deleted', statusCode: res.statusCode})
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Album')
    }

})


//create new album
router.post('/', requireAuth, albumValidator, restoreUser, async (req, res) => {
    const { user } = req
    const { title, description, imageUrl } = req.body

    const newAlbum = await Album.create({
        userId: user.id,
        title,
        description,
        previewImage: imageUrl
    })
    res.status(201)
    res.json(newAlbum)
})

//update album by albumId
router.put('/:albumId', requireAuth, albumValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;
    const { title, description, imageUrl } = req.body

    let album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            await album.update({
                title,
                description,
                previewImage: imageUrl
            })
            res.json(album)
        } else {
           unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Album')
    }

})

//Get details of an album from albumId
router.get('/:albumId', async (req, res, next) => {
    const { albumId } = req.params;


    const album = await Album.findByPk(albumId, {
        include: [
            {
                model: User,
                as: 'Artist',
                attributes: ['id', 'username', 'previewImage']
            },
            {
                model: Song
            }
        ],
    })

    if (album) {
        res.json(album)
    } else {
        doesNotExist(next, 'Album')
    }
})

//Add song to album by albumID
router.post('/:albumId', requireAuth, songValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params
    const { title, description, url, imageUrl } = req.body

    const album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            const newSong = await Song.create({
                albumId,
                userId: user.id,
                title,
                description,
                url,
                previewImage: imageUrl
            })
            res.status(201)
            res.json(newSong)
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Album')
    }

})

//Get all Albums
router.get('/', async (req, res) => {
    const allAlbums = await Album.findAll()

    res.json({Albums: allAlbums})
})


module.exports = router

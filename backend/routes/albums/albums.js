const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { jwtConfig } = require('../../config');


//Delete album by albumId
router.delete('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId);

    if (album) {
        if (album.userId === user.id) {
            album.destroy();
            res.json({msg: 'Album has been deleted'})
        } else {
            const err = new Error('Not authorized');
            err.status = 401;
            return next(err)
        }
    } else {
        const error = new Error('Album does not exist');
        error.status = 404;
        return next(error)
    }

})


//create new album
router.post('/', requireAuth, restoreUser, async (req, res) => {
    const { user } = req
    const { title, description, previewImage } = req.body

    const newAlbum = await Album.create({
        userId: user.id,
        title,
        description,
        previewImage,
    })

    res.json(newAlbum)
})

//update album by albumId   ////////////NEED TO FIX VALIDATION ERROR
router.put('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;
    const { title, description, previewImage } = req.body

    const album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            album.update({
                title:null,
                description,
                previewImage,
            })
            res.json(album)
        } else {
            const error = new Error('Not authorized')
            error.status = 401
            return next(error)
        }
    } else {
        const error = new Error('Album does not exist')
        error.status = 404
        return next(error)
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
        const error = new Error('Album does not exist');
        error.status = 404
        error.title = 'Album does not exist'
        return next(error)
    }
})

//Add song to album by albumID
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
        } else {
            const error = new Error('Not authorized')
            error.status = 401
            return next(error)
        }
    } else {
        const error = new Error('Album does not exist')
        error.status = 404;
        error.title = "Album does not exist"
        return next(error)
    }

})

//Get all Albums
router.get('/', async (req, res) => {
    const allAlbums = await Album.findAll()

    res.json(allAlbums)
})


module.exports = router

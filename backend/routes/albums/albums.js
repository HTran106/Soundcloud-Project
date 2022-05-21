const express = require('express')
const { check } = require('express-validator')
const router = express.Router();
const { unauthorized, requireAuth, restoreUser, doesNotExist } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const songCreateValidator = [
    check('url')
      .exists({ checkFalsy: true })
      .withMessage('Url is required'),
    check('title')
      .exists({ checkFalsy: true })
      .withMessage('Song title is required'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Description is required'),
    handleValidationErrors
]

//Delete album by albumId
router.delete('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId);

    if (album) {
        if (album.userId === user.id) {
            await album.destroy();
            res.json({msg: 'Album has been deleted'})
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Album')
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

//update album by albumId
router.put('/:albumId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;
    const { title, description, previewImage } = req.body

    let album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            await album.update({
                title,
                description,
                previewImage,
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
router.post('/:albumId', requireAuth, songCreateValidator, restoreUser, async (req, res, next) => {
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

    res.json(allAlbums)
})


module.exports = router

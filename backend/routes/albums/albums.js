const express = require('express')
const { check } = require('express-validator')
const router = express.Router();
const { unauthorized, requireAuth, restoreUser, doesNotExist } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { songValidator, albumValidator, validatePagination, pagination } = require('../../utils/validation');
const { multipleFileKeysUpload, singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


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
router.post('/', requireAuth,
singleMulterUpload("imageUrl"),
albumValidator, restoreUser, async (req, res) => {
    const { user } = req
    const { title, description } = req.body
    const imageUrl = await singlePublicFileUpload(req.file)

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
router.put('/:albumId', requireAuth,
singleMulterUpload("imageUrl"),
albumValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;
    const { title, description } = req.body
    const previewImage = await singlePublicFileUpload(req.file)

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
router.post('/:albumId',requireAuth,
multipleFileKeysUpload([{name: 'url', maxCount: 1}, {name: 'imageUrl', maxCount: 1}]),
songValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { albumId } = req.params
    const { title, description } = req.body
    const previewImage = await singlePublicFileUpload(req.files.imageUrl[0])
    const url = await singlePublicFileUpload(req.files.url[0])

    const album = await Album.findByPk(albumId)

    if (album) {
        if (album.userId === user.id) {
            const newSong = await Song.create({
                albumId: +albumId,
                userId: user.id,
                title,
                description,
                url,
                previewImage,
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
router.get('/', validatePagination ,async (req, res) => {
    let { page, size } = req.query;

    if (!size) size = 20
    if (!page) page = 0

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 0 : page = page
    size > 20 ? size = 20 : size = size


    const allAlbums = await Album.findAll({...pagination(page, size)})

    res.json({
        Albums: allAlbums,
        page,
        size
    })
})


module.exports = router

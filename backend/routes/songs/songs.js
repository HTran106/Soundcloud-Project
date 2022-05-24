const express = require('express')
const router = express.Router();
const { doesNotExist, requireAuth, restoreUser, unauthorized } = require('../../utils/auth');
const { User, Song, Album, Comment } = require('../../db/models');
const { songValidator, commentValidator, validatePagination, pagination } = require('../../utils/validation');


//delete comment
router.delete('/:songId/:commentId', requireAuth, restoreUser, async (req, res, next) => {
    const { commentId } = req.params;
    const { user } = req;

    const comment = await Comment.findByPk(commentId)

    if (comment) {
        if (comment.userId === user.id) {
            await comment.destroy()
            res.json({msg: 'Comment deleted'})
        }
    } else {
        doesNotExist(next, 'Comment')
    }
})


//edit comment
router.put('/:songId/:commentId', requireAuth, commentValidator, restoreUser, async (req, res, next) => {
    const { commentId } = req.params;
    const { user } = req
    const { body } = req.body

    const comment = await Comment.findByPk(commentId)

    if (comment) {
        if (comment.userId === user.id) {
            await comment.update({
                body,
            })
            res.json(comment)
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Comment')
    }

})


//Edit a song
router.put('/:songId', requireAuth, songValidator, restoreUser, async (req, res, next) => {
    const { songId } = req.params;
    const { user } = req;
    const { albumId, title, description, url, imageUrl } = req.body;


    let song = await Song.findByPk(songId)

    if (song) {
        if (song.userId === user.id) {
            await song.update({
                userId: user.id,
                albumId,
                title,
                description,
                url,
                previewImage: imageUrl
            })
            res.json(song)
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Song')
    }
})



//create comment based on songId
router.post('/:songId', requireAuth, commentValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { songId } = req.params;
    const { body } = req.body

    const song = await Song.findByPk(songId)

    if (song) {
        const comment = await Comment.create({
            userId: user.id,
            songId,
            body,
        })

        res.json(comment)

    } else {
        doesNotExist(next, 'Song')
    }
})

//Get all comments by songId
router.get('/:songId/comments', async (req, res, next) => {
    const { songId } = req.params;
    let { page, size } = req.query

    if (!size) size = 20
    if (!page) page = 1

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 1 : page = page
    size > 20 ? size = 20 : size = size

    const song = await Song.findByPk(songId)

    if (song) {

        const comment = await Comment.findAll({
            where: { songId, },
            include: {
                model: User,
                attributes: ['id', 'username']
            },
            ...pagination(page, size)
        })

        res.json({
            Comments: comment,
            page,
            size
        })

    } else {
        doesNotExist(next, 'Song')
    }
})


//Delete song by songId
router.delete('/:songId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { songId } = req.params;

    const song = await Song.findByPk(songId)

    if (song) {
        if (song.userId === user.id) {
            await song.destroy();
            res.json({msg: 'Successfully deleted', statusCode: res.statusCode})
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Song')
    }
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
        doesNotExist(next, 'Song')
    }
})

//Get all songs
router.get('/', validatePagination ,async (req, res) => {
    let { page, size } = req.query

    if (!size) size = 20
    if (!page) page = 1

    page = parseInt(page);
    size = parseInt(size);

    page > 10 ? page = 1 : page = page
    size > 20 ? size = 20 : size = size

    const songs = await Song.findAll({...pagination(page, size)})

    res.json({
        Songs: songs,
        page:
        size,
    })
})


module.exports = router

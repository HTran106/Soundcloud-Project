const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album, Comment } = require('../../db/models');
const { jwtConfig } = require('../../config');


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
        const err = new Error('Comment does not exist')
        err.status = 404;
        err.title = 'Comment does not exist'
        return next(err)
    }
})


//edit comment
router.put('/:songId/:commentId', requireAuth, restoreUser, async (req, res, next) => {
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
            const err = new Error('Not authorized')
            err.status = 401
            err.title = 'Not authorized'
            return next(err)
        }
    } else {
        const err = new Error('Comment does not exist')
        err.status = 404;
        err.title = 'Comment does not exist'
        return next(err)
    }

})


//Edit a song
router.put('/:songId', requireAuth, restoreUser, async (req, res, next) => {
    const { songId } = req.params;
    const { user } = req;
    const { albumId, title, description, url, previewImage } = req.body;


    let song = await Song.findByPk(songId)

    if (song) {
        if (song.userId === user.id) {
            await song.update({
                userId: user.id,
                albumId,
                title,
                description,
                url,
                previewImage,
            })
            res.json(song)
        } else {
            const err = new Error('Not authorized')
            err.status = 401
            err.title = 'Not authorized'
            return next(err)
        }
    } else {
        const err = new Error('Song does not exist')
        err.status = 400
        err.title = 'Song does not exist'
        return next(err)
    }
})



//create comment based on songId
router.post('/:songId', requireAuth, restoreUser, async (req, res, next) => {
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
        const err = new Error('Song does not exist');
        err.status = 404;
        err.title = "Song does not exist";
        return next(err)
    }


})

//Get all comments by songId
router.get('/:songId/comments', async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId)


    if (song) {

        const comment = await Comment.findAll({
            where: { songId, },
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        })

        res.json(comment)

    } else {
        const err = new Error('Song does not exist');
        err.status = 404;
        err.title = 'Song does not exist'
        return next(err)
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
            res.json({msg: 'Successfully deleted'})
        } else {
            const err = new Error('Not authorized');
            err.status = 401;
            err.title = 'Not authorized'
            return next(err)
        }
    } else {
        const err = new Error('Song does not exist')
        err.status = 404;
        err.title = 'Song does not exist'
        return next(err)
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

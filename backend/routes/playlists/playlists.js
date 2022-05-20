const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Song, Album, Playlist, PlaylistSong } = require('../../db/models');
const { jwtConfig } = require('../../config');

//Add song to a playlist based on playlistId
router.post('/:playlistId/songs', requireAuth, restoreUser, async (req, res, next) => {
    const { playlistId } = req.params
    const { user } = req
    const { songId } = req.body

    const playlist = await Playlist.findByPk(playlistId)

    if (playlist) {
        if (playlist.userId === user.id) {
            const newPlaylistSong = await PlaylistSong.create({
                playlistId,
                songId,
            })
            // Playlist.addSong()
            console.log(newPlaylistSong)
            // const playlistSong = await PlaylistSong.findOne({
            //     where: { playlistId, songId,},
            //     attributes: ['id', 'playlistId', 'songId']
            // })

            res.json(newPlaylistSong)
        } else {
            const err = new Error('Not authorized')
            err.status = 401
            err.title = 'Not authorized'
            return next(err)
        }
    } else {
        const err = new Error('Playlist does not exist')
        err.status = 404
        err.title = 'Playlist does not exist'
        return next(err)
    }
})


//Get details of playlist from an id
router.get('/:playlistId', async (req, res, next) => {
    const { playlistId } = req.params;

    const playlist = await Playlist.findByPk(playlistId, {
        include: {
            model: Song,
            through: { attributes: []}
        }
    })

    if (playlist) {
        res.json(playlist)
    } else {
        const err = new Error('Playlist does not exist')
        err.status = 404
        err.title = 'Playlist does not exist'
        return next(err)
    }
})

//Edit a playlist
router.put('/:playlistId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { playlistId } = req.params
    const { name, previewImage } = req.body

    const playlist = await Playlist.findByPk(playlistId)

    if (playlist) {
        if (playlist.userId === user.id) {
            await playlist.update({
                name,
                previewImage
            })
        } else {
            const err = new Error('Not authorized')
            err.status = 401
            err.title = 'Not authorized'
            return next(err)
        }
    } else {
        const err = new Error('Playlist does not exist')
        err.status = 404
        err.title = 'Playlist does not exist'
        return next(err)
    }
})



module.exports = router

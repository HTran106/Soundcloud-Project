const express = require('express')
const router = express.Router();
const { requireAuth, restoreUser, unauthorized, doesNotExist } = require('../../utils/auth');
const { Song, Playlist, PlaylistSong } = require('../../db/models');
const { playlistValidator, validatePagination, pagination } = require('../../utils/validation');




//Delete a playlist
router.delete('/:playlistId', requireAuth, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { playlistId } = req.params;

    const playlist = await Playlist.findByPk(playlistId)

    if (playlist) {
        if (playlist.userId === user.id) {
            await playlist.destroy();
            res.json({ msg: 'Successfully deleted', statusCode: res.statusCode })
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Playlist')
    }
})


//Create a playlist
router.post('/', requireAuth, playlistValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { name, imageUrl } = req.body;

    const newPlaylist = await Playlist.create({
        userId: user.id,
        name,
        previewImage: imageUrl
    })
    res.status(201)
    res.json(newPlaylist)
})

//Add song to a playlist based on playlistId
router.post('/:playlistId/songs', requireAuth, restoreUser, async (req, res, next) => {
    let { playlistId } = req.params
    const { user } = req
    const { songId } = req.body

    const playlist = await Playlist.findByPk(playlistId)
    const song = await Song.findByPk(songId)

    if (!playlist) {
        doesNotExist(next, 'Playlist')
    }

    if (!song) {
        doesNotExist(next, 'Song')
    }



    if (playlist.userId === user.id) {
        const newPlaylistSong = await PlaylistSong.create({
            playlistId,
            songId,
        })

        const playlistSong = await PlaylistSong.findOne({
            where: { playlistId, songId,},
            attributes: ['id', 'playlistId', 'songId']
        })

        res.json(playlistSong)

    } else {
        unauthorized(next)
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

    if (!playlist) {
        doesNotExist(next, 'Playlist')
    } else {
        res.json(playlist)
    }
})

//Edit a playlist
router.put('/:playlistId', requireAuth, playlistValidator, restoreUser, async (req, res, next) => {
    const { user } = req;
    const { playlistId } = req.params
    const { name, imageUrl } = req.body

    const playlist = await Playlist.findByPk(playlistId)

    if (playlist) {
        if (playlist.userId === user.id) {
            const updatedPlaylist = await playlist.update({
                name,
                previewImage: imageUrl
            })
            res.json(updatedPlaylist)
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Playlist')
    }
})


//Get all playlists
router.get('/', validatePagination, async (req, res, next) => {
    let { page, size } = req.query

    if (!size) size = 20
    if (!page) page = 0

    page = parseInt(page);
    size = parseInt(size);

    const allPlaylist = await Playlist.findAll({...pagination(page, size)})

    res.json({
        Playlists: allPlaylist,
        page,
        size
    })
})


module.exports = router

const express = require('express')
const router = express.Router();
const { requireAuth, restoreUser } = require('../../utils/auth');
const { Song, Album, Playlist } = require('../../db/models');
const { pagination, validatePagination } = require('../../utils/validation');




//Get all Albums created by the Current User
router.get('/albums', requireAuth, restoreUser, async (req, res) => {
  const { user } = req;

  const albums = await Album.findAll({
    where: {
      userId: user.id
    }
  })

  res.json({Albums: albums})
})

//Get all Songs created by current User
router.get('/songs', requireAuth, restoreUser, async (req, res) => {
  const { user } = req;

  const songs = await Song.findAll({
    where: {
      userId: user.id
    }
  })
  res.json({Songs: songs})
})

//get all info on current user
router.get('/info', requireAuth, restoreUser, async (req, res) => {
    const { user } = req;

    const info = user.toSafeObject()

    res.json({
      user: info
    })
})

//Get playlist created by current user
router.get('/playlists', requireAuth, validatePagination, restoreUser, async (req, res) => {
  const { user } = req;
  let { page, size } = req.query

  if (!size) size = 20
  if (!page) page = 0

  page = parseInt(page);
  size = parseInt(size);

  const playlist = await Playlist.findAll({
    where: {
      userId: user.id
    },
    ...pagination(page, size)
  })

  res.json({
    Playlists: playlist,
    page,
    size,
  })
})

module.exports = router

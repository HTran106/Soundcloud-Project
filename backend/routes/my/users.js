const express = require('express')
const router = express.Router();
const { requireAuth, restoreUser } = require('../../utils/auth');
const { Song, Album, Playlist } = require('../../db/models');
const { pagination, validatePagination } = require('../../utils/validation');




//Get all Albums created by the Current User
router.get('/albums', validatePagination ,requireAuth, restoreUser, async (req, res) => {
  const { user } = req;
  let { page, size } = req.query;

  if (!size) size = 20
  if (!page) page = 0

  page = parseInt(page);
  size = parseInt(size);

  page > 10 ? page = 0 : page = page
  size > 20 ? size = 20 : size = size

  const albums = await Album.findAll({
    where: {
      userId: user.id,
      ...pagination(page, size)
    }
  })

  res.json({
    Albums: albums,
    page,
    size,
  })
})

//Get all Songs created by current User
router.get('/songs',validatePagination ,requireAuth, restoreUser, async (req, res) => {
  const { user } = req;
  let { page, size } = req.query;

  if (!size) size = 20
  if (!page) page = 0

  page = parseInt(page);
  size = parseInt(size);

  page > 10 ? page = 0 : page = page
  size > 20 ? size = 20 : size = size

  const songs = await Song.findAll({
    where: {
      userId: user.id,
      ...pagination(page,size)
    }
  })
  res.json({
    Songs: songs,
    page,
    size,
  })
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
router.get('/playlists', validatePagination ,requireAuth, restoreUser, async (req, res) => {
  const { user } = req;
  let { page, size } = req.query;

  if (!size) size = 20
  if (!page) page = 0

  page = parseInt(page);
  size = parseInt(size);

  page > 10 ? page = 0 : page = page
  size > 20 ? size = 20 : size = size

  const playlist = await Playlist.findAll({
    where: {
      userId: user.id,
      ...pagination(page, size)
    }
  })

  res.json({
    Playlists: playlist,
    page,
    size
  })
})

module.exports = router

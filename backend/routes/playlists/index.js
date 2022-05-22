const router = require('express').Router()
const playlistRouter = require('./playlists.js')

router.use(playlistRouter)

module.exports = router

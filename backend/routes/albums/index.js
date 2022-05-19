const router = require('express').Router()
const albumsRouter = require('./albums.js')

router.use(albumsRouter)

module.exports = router

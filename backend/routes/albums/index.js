const router = require('exoress').Router()
const albumsRouter = require('./albums.js')

router.use(albumsRouter)

module.exports = router

const router = require('express').Router()
const songsRouter = require('./songs.js')

router.use(songsRouter)

module.exports = router

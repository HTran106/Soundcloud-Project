const router = require('express').Router()
const artistRouter = require('./artists.js')

router.use(artistRouter)

module.exports = router

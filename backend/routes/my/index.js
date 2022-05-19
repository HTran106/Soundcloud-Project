const router = require('express').Router()
const currentUserRouter = require('./users.js')

router.use(currentUserRouter)

module.exports = router

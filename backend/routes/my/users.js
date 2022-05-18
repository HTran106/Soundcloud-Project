const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { jwtConfig } = require('../../config');


router.get('/info', )

module.exports = router

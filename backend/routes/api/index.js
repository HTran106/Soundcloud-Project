// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Song } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors, handleQueryValidationErrors } = require('../../utils/validation');

router.use(sessionRouter);
router.use('/users', usersRouter);

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

const validateQuery = [
  check('page')
    .isInt({ min: 0})
    .optional({nullable: true})
    .withMessage('Page must be greater than or equal to 0'),
  check('size')
    .isInt({ min: 0})
    .optional({nullable: true})
    .withMessage('Size must be greater than or equal to 0'),
  check('createdAt')
    .isDate()
    .optional({nullable: true})
    .withMessage('CreatedAt is invalid'),
  check('updatedAt')
    .isDate()
    .optional({nullable: true})
    .withMessage('UpdatedAt is invalid'),
  handleQueryValidationErrors
]



//Search query route
router.get('/search', validateQuery, async (req, res, next) => {
  let { page, size, title, createdAt } = req.query;

  page = parseInt(page);
  size = parseInt(size);

  page > 10 ? page = 0 : page = page
  size > 20 ? size = 20 : size = size


  let where = {}
  if (title) where.title = title
  if (createdAt) where.createdAt = createdAt

  let songs = await Song.findAll({
    where: {...where},
    limit: size,
    offset: size * (page - 1)
  })


  res.json({
    songs,
    page,
    size,
  })
})

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});

const { restoreUser } = require('../../utils/auth.js');

router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;

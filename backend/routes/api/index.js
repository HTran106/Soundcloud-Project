// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Song } = require('../../db/models');

router.use(sessionRouter);

router.use('/users', usersRouter);

//Search query route
router.get('/search', async (req, res) => {
  let { page, size, title, createdAt } = req.query;

  if (page) {
    if (page > 0 && page <= 10) {
      page = parseInt(page)
    } else {
      page = 0
    }
  } else {
    page = 0
  }


  if (size) {
    if (size > 0 && size <= 20) {
      size = parseInt(size)
    } else {
      size = 20
    }
  } else {
    size = 20
  }

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

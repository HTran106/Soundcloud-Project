// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Song } = require('../../db/models');
const { validateSearchQuery, pagination } = require('../../utils/validation');
const { Op } = require('sequelize')

router.use(sessionRouter);
router.use('/users', usersRouter);



//Search query route
router.get('/search', validateSearchQuery, async (req, res, next) => {
  let { page, size, title, createdAt } = req.query;

  if (!size) size = 20
  if (!page) page = 0

  page = parseInt(page);
  size = parseInt(size);

  page > 10 ? page = 0 : page = page
  size > 20 ? size = 20 : size = size

  let where = {}
  if (title) where.title = { [Op.like]: '%' + title + '%' }
  if (createdAt) where.createdAt = createdAt

  let songs = await Song.findAll({
    where: {...where},
    ...pagination(page, size)
  })


  res.json({
    Songs: songs,
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

// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.get('/', async (req, res) => {
  res.send('hello')
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

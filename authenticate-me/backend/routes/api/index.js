const router = require('express').Router();
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

router.get('/testing1', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

module.exports = router;

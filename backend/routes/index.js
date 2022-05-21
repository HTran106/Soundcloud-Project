const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const myRouter = require('./my');
const albumsRouter = require('./albums')


const artistRouter = require('./artists')

router.use(apiRouter);
router.use('/my', myRouter)
router.use('/albums', albumsRouter)



router.use('/artists', artistRouter)

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});



router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;

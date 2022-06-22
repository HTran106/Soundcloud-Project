const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const myRouter = require('./my');
const albumsRouter = require('./albums');
const songsRouter = require('./songs')


const artistRouter = require('./artists')
const playlistRouter = require('./playlists')

router.use('/playlists', playlistRouter)
router.use(apiRouter);
router.use('/my', myRouter);
router.use('/albums', albumsRouter);
router.use('/songs', songsRouter)
router.use('/artists', artistRouter)

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});



// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;

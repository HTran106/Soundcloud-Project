const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const myRouter = require('./my');
const albumsRouter = require('./albums');
const songsRouter = require('./songs')


const artistRouter = require('./artists')
const playlistRouter = require('./playlists')

router.use('/api/playlists', playlistRouter)
router.use(apiRouter);
router.use('/api/my', myRouter);
router.use('/api/albums', albumsRouter);
router.use('/api/songs', songsRouter)
router.use('/api/artists', artistRouter)

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

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

if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.status(201).json({});
  });
}

module.exports = router;

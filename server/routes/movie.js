const express = require('express');

const router = express.Router();

const getMovies = require('../controllers/movie')
const authorized = require('../middleware/authorized')

router.get('/trending', authorized,getMovies.getMovieTrending);
router.get('/trending/:page', authorized ,getMovies.getMovieTrending);
router.get('/top-rate/:page', authorized,getMovies.getMoviesToprate);


router.get('/discover/:genre/:page',authorized ,getMovies.getMoviesDiscover );

router.post('/video', authorized,getMovies.getMovieVideo);

router.post('/search/:page',authorized , getMovies.getKeySearch);

module.exports = router;
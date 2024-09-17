const Movies = require("../models/Movie");
const paginate = require("../utils/paging");

exports.getMovieTrending = (req, res, next) => {
  const movies = Movies.all();
  // Sap xep danh sach movie theo thu tu giam dan
  const sorterdMovies = movies.sort((a, b) => b.popularity - a.popularity);
  // Neu khong co param mac dinh page la 1
  const page = parseInt(req.params.page) || 1;
  // Lay 20 phim duoc nguoi nguoi xem nhat
  const paginatedMovies = paginate(sorterdMovies, page, 20);
  res.status(200).json({
    results: paginatedMovies.data,
    page: paginatedMovies.page,
    total_pages: paginatedMovies.totalPages,
  });
};

exports.getMoviesToprate = (req, res, next) => {
  const movies = Movies.all();
  // sap xep phim theo vore-rate giam dan
  const sorterdMovies = movies.sort((a, b) => a.vote_average - b.vote_average);
  const page = parseInt(req.params.page) || 1;
  const paginatedMovies = paginate(sorterdMovies, page, 20);
  res.status(200).json({
    results: paginatedMovies.data,
    page: paginatedMovies.page,
    total_pages: paginatedMovies.totalPages,
  });
};

exports.getMoviesDiscover = (req, res, next) => {
  const genre = req.params.genre;
  const page = parseInt(req.params.page) || 1;
  const genreList = Movies.genreMovie();
  // Neu khong co gerne thi thong bao loi 400
  if (!genre) {
    return res.status(400).json({
      message: "Not found gerne parram",
    });
  }

  // Lay thong tin phim tim duoc dau tien
  const genreObj = genreList.find((gen) => gen.id === parseInt(genre));
  // Neu khong co genre thi thong bao loi 400
  if (!genreObj) {
    return res.status(400).json({ message: "Not found that genre id" });
  }

  // Lay danh sach phim theo genre tu movieList.json
  const movies = Movies.all().filter((movie) =>
    movie.genre_ids.includes(parseInt(genre))
  );
  const paginatedMovies = paginate(movies, page, 20);

  res.status(200).json({
    results: paginatedMovies.data,
    page: paginatedMovies.page,
    total_pages: paginatedMovies.totalPages,
    genre_name: genreObj.name,
  });
};

exports.getMovieVideo = (req, res, next) => {
  const film_id = parseInt(req.body.id);
  // lay du lieu tu file videoList.json
  const videoMovies = Movies.videoMovie();

  if (!film_id) {
    return res.status(400).join({
      message: "Not found film_id params",
    });
  }
  const videoList = videoMovies.find((film) => film.id === film_id);
  if (!videoList) {
    res.status(400).json({
      message: "Not found video",
    });
  }

  const officialVideos = videoList.videos.filter(
    (v) =>
      v.official &&
      v.site === "YouTube" &&
      (v.type === "Trailer" || v.type === "Teaser")
  );

  if (officialVideos.length === 0) {
    return res.status(404).json({ message: "Not found video" });
  }
  const latestVideo = officialVideos.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  )[0];

  res.status(200).json(latestVideo);
};

exports.getKeySearch = (req, res, next) => {
  const { keyword, genre, language, mediaType, year } = req.body;

  if (!keyword) {
    return res.status(400).json({ message: "Not found keyword param" });
  }
  let is;
  
  let movies = Movies.all().filter((movie) => {
    if (movie.title) {
      if (movie.overview) {
        is = movie.overview.toLowerCase().includes(keyword);
      }
    }
    if (movie.overview) {
      if (movie.title) {
        is = movie.title.toLowerCase().includes(keyword);
      }
    }
    return is;
  });
  if (genre) {
    
    movies = movies.filter((movie) =>
      movie.genre_ids.includes(parseInt(genre))
    );
  } 

  if (mediaType) {
    movies = movies.filter((movie) => movie.media_type === mediaType);
  } 

  if (language) {
    movies = movies.filter((movie) => movie.original_language === language);
  } 

  if (year) {
    movies = movies.filter(
      (movie) => new Date(movie.release_date).getFullYear() === parseInt(year)
    );
  } 
  const page = parseInt(req.params.page) || 1;
  const paginatedMovies = paginate(movies, page, 20);

  res.status(200).json({
    results: paginatedMovies.data,
    page: paginatedMovies.page,
    total_pages: paginatedMovies.totalPages,
  });
};

const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const page = Math.floor(Math.random() * 3) + 1;
const requests = {
	fetchTrending: `trending/${page}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `top-rate/${page}`,
	fetchActionMovies: `discover/28/${page}`,
	fetchComedyMovies: `discover/35/${page}`,
	fetchHorrorMovies: `discover/27/${page}`,
	fetchRomanceMovies: `discover/10749/${page}`,
	fetchDocumentaries: `discover/99/${page}`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export default requests;

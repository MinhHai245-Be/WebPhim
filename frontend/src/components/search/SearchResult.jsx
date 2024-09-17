import React, { useState, useEffect } from 'react';

import axios from '../../utils/axios';

import './SearchResult.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const SearchResult = ({query}) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		function fetchData() {
			axios.post('http://localhost:5000/api/movies/search/1',
				 {keyword : query.searchInput,
					genre : query.genre,
					mediaType: query.mediaType,
					language: query.language,
					year : query.year
				   },
				{params: {
					token: "8qlOkxz4wq"
				},}
			)
			.then(reponse => {
				setMovies(reponse.data.results);
			})
			.catch(err => {
				console.log(err)
			})			
		}

		if (query.searchInput) {
			fetchData();
		} else {
			setMovies([]);
		}
	}, [query]);

	return(
		<div className='row'>
			<h2>Search Result</h2>
			<div className='row_posters search-resul-container sc2'>
				{movies.map((movie) => {
					return (
						<img
							key={movie.id}
							className={`row_poster row_posterLarge`}
							src={`${base_url}${movie.poster_path}`}
							alt={movie.title}
						/>
					);
				})}
			</div>
		</div>
	)
};

export default SearchResult;

import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios'

import './MovieDetail.css';

const opts = {
	height: '400',
	width: '100%',
	playerVars: {
		autoplay: 0,
	},
};

const MovieDetail = ({ movieData }) => {
	const [data, setdata] = useState();
	const { release_date, title, name, overview, vote_average } = movieData;
    useEffect(() => {
       axios.post('http://localhost:5000/api/movies/video',{id : movieData.id} )
	   .then(reponse => {
		// Lay key de dua dua vao the youtube hien video chuan
		setdata(reponse.data.key);
	   })
	   .catch(err => {
		console.log(err)
	   })
	},[movieData.id]);
	return (
		<div className='movie_detail'>
			<div className='movie_detail_data'>
				<h1>{title || name}</h1>
				<hr></hr>

				<h3>Release Date: {release_date}</h3>
				<h3>Vote: {vote_average} / 10</h3>
				<br></br>
				<p>{overview}</p>
			</div>
			<div className='movie_detail_trailer'>
				<YouTube
					videoId={data}
					opts={opts}
				/>
			</div>
		</div>
	);
}

export default MovieDetail;

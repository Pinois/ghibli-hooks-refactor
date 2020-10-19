import React, { useState, useEffect } from 'react';
import Movie from './Movie';

import "../styles/MovieList.scss";

function MovieList() {
	const [movies, setMovies] = useState([]);

	async function fetchMovie() {
		const response = await fetch('https://ghibliapi.herokuapp.com/films');
		const data = await response.json();
		setMovies(data);
	}

	useEffect(() => {
		fetchMovie();
	}, []);

	return ( 
		<div className="movies-container">
			{(movies.length === 0) ? <h3>Loading...</h3> : ``}
			{movies
				.sort((a, b) => b.rt_score - a.rt_score)
				.map(movie => {
					return <Movie key={movie.id} {...movie}></Movie>;
				})}
		</div>
	);
}

export default MovieList;

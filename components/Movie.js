import React from 'react';

import "../styles/Movie.scss";
import Heart from "../styles/icons/heart.svg"

function Movie({ title, description, director, producer, release_date, rt_score }) {
	return (
		<article className="movie">
			<header>
				<h3>
					{title}
				</h3>
				<span>{release_date}</span>
				<p>{rt_score}</p><img src={Heart} alt="movie score"/>
			</header>
			<p>{description}</p>
			<p>
				<span>{director}</span> - <span>{producer}</span>
			</p>
		</article>
	);
}

export default Movie;

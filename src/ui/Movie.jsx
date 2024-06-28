import React from "react";
import { Link } from "react-router-dom";



const Movie = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/${movie.imdbID}`}>
        <div className="movie-card" key={movie.imdbID}>
          <div className="movie-card__container">
            <figure className="search-item-thumbnail">
              <img
                src={movie.Poster}
                className="search-item-img"
                alt="movie poster"
              />
            </figure>
            <div className="search-item-info">
              <h3 className="search-item-h3">{movie.Title}</h3>
              <p className="search-item-p">{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
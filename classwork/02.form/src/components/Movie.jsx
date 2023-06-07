import React from "react";

const Movie = ({ movie, deleteMovie }) => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-3 p-2">
      <div className="movie-card card p-4">
        <img className="w-100" src={movie.Images} alt="" />
        <p>Movie: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <p>Imdb: {movie.imdbRating}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth=""
          stroke="currentColor"
          width="30px"
          height="30px"
          onClick={() => {
            deleteMovie(movie.id);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Movie;

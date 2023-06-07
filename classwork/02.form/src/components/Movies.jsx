import React from "react";
import Movie from "./movie";
import axios from "axios";
let BASE_URL = "http://localhost:8080/movies";

const Movies = ({ movies, setMovis }) => {
  const deleteMovie = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    let filtered = movies.filter((item) => item.id != id);
    setMovis(filtered);
  };
  return (
    <div className="container">
      
      <div className="head">
        <h1 className="text-center p-5">Movies List</h1>
      </div>
      <div className="movies row p-2">
        {movies.map((movie) => {
          return (
            <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

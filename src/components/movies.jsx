import React from "react";
import { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  return (
    <>
      <h1>Movies Component</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Movies;

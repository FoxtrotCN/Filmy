import React from "react";
import { useState } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const getBadgeMessage = () => {
    let badgeColorProperty = "badge text-bg-";
    badgeColorProperty += movies.length === 0 ? "info" : "success";
    return badgeColorProperty;
  };

  //Count of movie items
  if (movies.length === 0)
    return (
      <p className={getBadgeMessage()}>There are no movies in the database.</p>
    );

  return (
    <>
      <p className={getBadgeMessage()}>
        Showing {movies.length} movies in the database.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Movies;

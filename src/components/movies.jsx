import React from "react";
import { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import pagination from "./common/pagination";
import Pagination from "./common/pagination";

function Movies() {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);

  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const handleLike = (movie) => {
    const getMovies = [...movies];
    const index = movies.indexOf(movie);
    getMovies[index] = { ...movies[index] };
    getMovies[index].liked = !movies[index].liked;
    setMovies(getMovies);
  };

  const getBadgeMessage = () => {
    let badgeColorProperty = "badge text-bg-";
    badgeColorProperty += movies.length === 0 ? "info" : "success";
    return badgeColorProperty;
  };

  const handlePageChange = (page) => {
    console.log(page);
  };

  //Count of movie items
  let moviesCount = movies.length;
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
                <Like liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
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

      <Pagination
        itemsCount={moviesCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Movies;

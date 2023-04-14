import React from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";

function Movies() {
  const [allMovies, setAllMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (movie) => {
    const filteredMovies = allMovies.filter((m) => m._id !== movie._id);
    setAllMovies(filteredMovies);
  };

  const handleLike = (movie) => {
    const getMovies = [...allMovies];
    const index = allMovies.indexOf(movie);
    getMovies[index] = { ...allMovies[index] };
    getMovies[index].liked = !allMovies[index].liked;
    setAllMovies(getMovies);
  };

  const getBadgeMessage = () => {
    let badgeColorProperty = "badge text-bg-";
    badgeColorProperty += allMovies.length === 0 ? "info" : "success";
    return badgeColorProperty;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //Count of movie items
  let moviesCount = allMovies.length;
  if (allMovies.length === 0)
    return (
      <p className={getBadgeMessage()}>There are no movies in the database.</p>
    );

  // Paginate movies
  const movies = paginate(allMovies, currentPage, pageSize);

  return (
    <>
      <p className={getBadgeMessage()}>
        Showing {allMovies.length} movies in the database.
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
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Movies;

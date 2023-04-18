import React from "react";
import Like from "./common/like";

function MoviesTable({ sortColumn, movies, onLike, onDelete, onSort }) {
  const raiseSort = (path) => {
    const sortedColumn = { ...sortColumn };
    if (sortedColumn.path === path)
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    onSort(sortedColumn);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => raiseSort("title")}>Title</th>
            <th onClick={() => raiseSort("genre.name")}>Genre</th>
            <th onClick={() => raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => raiseSort("rate")}>Rate</th>
            <th />
            <th />
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
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
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

export default MoviesTable;

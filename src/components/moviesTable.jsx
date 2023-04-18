import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

function MoviesTable({ sortColumn, movies, onLike, onDelete, onSort }) {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody columns={columns} data={movies} />
      </table>
    </>
  );
}

export default MoviesTable;

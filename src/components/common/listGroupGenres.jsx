import React from "react";

function ListGroupGenres({ genres, onGenreSelected }) {
  return (
    <>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre._id}
            className="list-group-item"
            onClick={() => onGenreSelected(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupGenres;

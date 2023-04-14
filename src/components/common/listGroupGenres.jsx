import React from "react";

function ListGroupGenres({
  genres,
  onGenreSelected,
  textProperty,
  valueProperty,
}) {
  return (
    <>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre[valueProperty]}
            className="list-group-item"
            onClick={() => onGenreSelected(genre)}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </>
  );
}

ListGroupGenres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroupGenres;

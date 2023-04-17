import React, { useEffect } from "react";
import Pagination from "./common/pagination";
import ListGroupGenres from "./common/listGroupGenres";
import { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setAllMovies(getMovies());
  }, []);

  useEffect(() => {
    setAllGenres(getGenres());
  }, []);

  useEffect(() => {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    setAllGenres(genres);
  }, []);

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

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  // Paginate movies
  const filteredMovies =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;
  const movies = paginate(filteredMovies, currentPage, pageSize);

  //Count of movie items
  let moviesCount = allMovies.length;
  if (moviesCount === 0)
    return (
      <p className={getBadgeMessage()}>There are no movies in the database.</p>
    );

  return (
    <>
      <div className="row">
        <div className="col-3">
          <ListGroupGenres
            genres={allGenres}
            selectedGenre={selectedGenre}
            onGenreSelected={handleGenreSelect}
          />
        </div>

        <div className="col">
          <p className={getBadgeMessage()}>
            Showing {filteredMovies.length} movies in the database.
          </p>

          <MoviesTable
            movies={movies}
            onLike={handleLike}
            onDelete={handleDelete}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default Movies;

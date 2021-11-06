import React from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import SideNav from "./common/sidenav";
import { getGenres } from "../services/fakeGenreService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
    genres: getGenres(),
    currentGenre: "all-genres",
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre.name });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
    } = this.state;

    if (count === 0)
      return (
        <p className=" container font-weight-bold lead py-4">
          There are no movies
        </p>
      );

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <main className="container">
        <p className="font-weight-bold lead py-4">
          Showing {count} movies in the database
        </p>
        <div className="row">
          <SideNav
            navItems={genres}
            currentGenre={currentGenre}
            onGenreChange={this.handleGenreChange}
          />
          <div className="col-sm col-9 mx-4">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="font-weight-bold">
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id} id={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Movies;

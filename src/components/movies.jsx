import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    movieCount: getMovies().length,
  };
  handleDelete = (movie) => {
    const row = document.getElementById(`${movie.title}`);
    row.classList.add("d-none");
    this.setState({ movieCount: this.state.movieCount - 1 });
  };
  render() {
    return (
      <main className="container">
        <p className="font-weight-bold lead py-4">
          {this.state.movieCount === 0
            ? "There are no movies"
            : ` Showing ${this.state.movieCount} movies in the database`}
        </p>
        <table className="table table-striped">
          <thead>
            <tr className="font-weight-bold">
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr id={movie.title}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
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
      </main>
    );
  }
}

export default Movies;

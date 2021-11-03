import React  from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    liked: false
    // movieCount: getMovies().length,
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // const row = document.getElementById(`${movie._id}`);
    // row.classList.add("d-none");
    // this.setState({ movieCount: this.state.movieCount - 1 });
  };

  handleLike = () => {
    let liked = this.state.liked
     if(liked){
      liked = false
     } else(
       liked = true
     )

     this.setState({liked})
  }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <p className=" container font-weight-bold lead py-4">
          There are no movies
        </p>
      );

    return (
      <main className="container">
        <p className="font-weight-bold lead py-4">
          Showing {count} movies in the database
        </p>
        <table className="table table-striped">
          <thead>
            <tr className="font-weight-bold">
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
             <th/>
             <th/>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr id={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={this.state.liked}  onLike={this.handleLike} /></td>
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

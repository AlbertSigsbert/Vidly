import React from "react";
import Pagination from "./common/pagination";
import SideNav from "./common/sidenav";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path:'title' , order:'asc'}
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id:""}, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  
  handleSort = (path) => {
    // const sortColumn = {...this.state.sortColumn};
    // if (sortColumn.path === path) {
    //   sortColumn.order = sortColumn.order === 'asc' ? 'desc': 'asc';
    // }
    // else{
    //   sortColumn.path = path;
    //   sortColumn.order = 'asc';
    // }

    // this.setState({sortColumn})
     const sortColumn = {...this.state.sortColumn};
     const order = (sortColumn.path === path) && sortColumn.order === 'asc'? 'desc' : 'asc';
     this.setState({ sortColumn: {path, order}});
  }
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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    if (count === 0)
      return (
        <p className=" container font-weight-bold lead py-4">
          There are no movies
        </p>
      );

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <main className="container">
        <p className="font-weight-bold lead py-4">
          Showing {filtered.length} movies in the database
        </p>
        <div className="row">
          <SideNav
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          <div className="col-sm col-9 mx-4">
            <MovieTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort ={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
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

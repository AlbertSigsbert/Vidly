import React from "react";
import Pagination from "./common/pagination";
import SideNav from "./common/sidenav";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";
import Search from "./common/search";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery:"",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
 
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery:"", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery:query, selectedGenre:null , currentPage:1});
 };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;
    
   
    let filtered = allMovies;
    if(searchQuery)
        filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    else if (selectedGenre && selectedGenre._id)
    filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id )
    

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, movies };
  };


  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, genres, selectedGenre, searchQuery, sortColumn } =
      this.state;

    if (count === 0)
      return (
        <p className=" container font-weight-bold lead py-4">
          There are no movies
        </p>
      );

    const { totalCount, movies } = this.getPagedData();

    return (
      <main className="container">
        <p className="font-weight-bold lead py-4">
          Showing {totalCount} movies in the database
        </p>
        <div className="row">
          <SideNav
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          <div className="col-sm col-9 mx-lg-4">
            <Search value={searchQuery} onSearch={this.handleSearch} />
            <MovieTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
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

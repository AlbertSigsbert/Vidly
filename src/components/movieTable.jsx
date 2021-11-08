import React from "react";
import Like from "./common/like";
const MovieTable = (props) => {
    const {movies, onLike, onDelete,onSort} = props;
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr className="font-weight-bold">
          <th scope="col" onClick={ () => onSort('title')}>Title </th>
          <th scope="col" onClick={ () => onSort('genre.name')}>Genre</th>
          <th scope="col" onClick={ () => onSort('numberInStock')}>Stock</th>
          <th scope="col" onClick={ () => onSort('dailyRentalRate')}>Rate</th>
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
                onClick={() => onLike(movie)}
              />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;

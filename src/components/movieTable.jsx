import React from "react";

import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class MovieTable extends React.Component {

  columns = [
     {name:'title', label:'Title'},
     {name:'genre.name', label:'Genre'},
     {name:'numberInStock', label:'Stock'},
     {name:'dailyRentalRate', label:'Rate'},
     {key:'like'},
     {key:'delete'},
  ]
  render() { 
    const {movies, onLike, onDelete, onSort, sortColumn} = this.props;
    return (
      <table className="table table-striped table-bordered">
          <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
          <TableBody columns={this.columns} data={movies} onLike={onLike} onDelete={onDelete}/>
      </table>
    );
  }
}
 
export default MovieTable;

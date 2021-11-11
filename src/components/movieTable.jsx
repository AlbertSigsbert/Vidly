import React from "react";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends React.Component {

  columns = [
     {path:'title', label:'Title'},
     {path:'genre.name', label:'Genre'},
     {path:'numberInStock', label:'Stock'},
     {path:'dailyRentalRate', label:'Rate'},
     {key:'like',content: movie => (<Like liked={movie.liked} onClick={()=> this.props.onLike(movie)}/>)},
     {key:'delete', content: movie => (<button className="btn btn-danger btn-sm" onClick={()=> this.props.onDelete(movie)}>Delete</button>)}
  ]
  render() { 
    const {movies, onSort, sortColumn} = this.props;
    return (
        < Table data={movies} sortColumn={sortColumn} columns={this.columns} onSort={onSort}/>
    );
  }
}
 
export default MovieTable;

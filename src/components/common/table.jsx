import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import { Link } from 'react-router-dom';



const Table = ({columns,onSort, sortColumn,data}) => {
   
    return ( 
        <div>
          
            <Link className="btn btn-primary mb-3" to="/movies/new">New Movie</Link>
           
            <table className="table table-striped table-bordered">
                <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody columns={columns} data={data}/>
            </table> 
        </div>
        
    );
}
 
export default Table;
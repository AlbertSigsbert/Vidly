import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const MovieForm = () => {
    const params = useParams();
    const navigate = useNavigate();
   
    return (
        <div className="container">
            <h1>Movie Form {params.movie_id}</h1> 
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/movies')}>Save</button>
        </div>
        );
}
 
export default MovieForm;
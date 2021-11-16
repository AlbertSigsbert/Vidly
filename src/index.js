import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/common/notFound';
import MovieForm from './components/movieForm';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import  './app.css';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movie_id" element={<MovieForm/>} />
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/rentals" element={<Rentals/>}/>
        <Route path="/" element={<Navigate to="/movies"/>}/>
        <Route path="/:pathname" element={<Navigate to="/not-found"/>} />
     </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

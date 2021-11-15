import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import  './app.css';
import NotFound from './components/common/notFound';
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path="/not-found" element={<NotFound/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/rentals" element={<Rentals/>}></Route>
        <Route path="/" element={<Movies/>}></Route>
     </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

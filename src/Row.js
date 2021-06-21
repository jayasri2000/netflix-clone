

import {useState, useEffect } from "react";
import React from 'react';
import axios from './requirements/axios';
import './Row.css';


const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow})
{
 
const [movies, setMovies] =useState([]);

//a snippet that runs based on some condition.

useEffect(() =>{
  //if brackets are empty then code runs once else every time it changes on every run.
   
  async function fetchData(){
    const request= await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }
  fetchData();
},[fetchUrl]
);

console.table(movies);


    return(
      <div className="row">
      
      <h2> {title}</h2>
      <div className="row_posters">
        {movies.map(movie =>(
          <img 
          key={movie.id}
          className={`row_poster ${isLargeRow && "row_posterLarger"}`} 
          src={`${base_url}${movie.poster_path}`}
           alt={movie.name}></img>
        )
        
        )}
      </div>

      </div>
    );
    
}

export default Row;
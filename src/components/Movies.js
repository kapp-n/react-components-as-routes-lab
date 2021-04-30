import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map(movie =>
          <div>
            <ul>
              <li>{movie.title}</li>
              <li>{movie.time}</li>
              <li>{movie.genres}</li> 
            </ul>
          </div>)}
    </div>
  );
};

export default Movies;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// TMDB

// token de acceso de lectura eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWIxNGI0Njc0NDU2OWM4ZWMxMjRlYjM0OWYyZjJmNiIsInN1YiI6IjYxY2I0NDczYTI4NGViMDA2MjhjNGJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RLzMJSyIudunzdoyojbQhVe6Bp2N0Qu1nkkKCY6cdO4

//API Key: e5b14b46744569c8ec124eb349f2f2f6

//Here's an example API request:

//https://api.themoviedb.org/3/movie/550?api_key=e5b14b46744569c8ec124eb349f2f2f6
//Useful Links

//Documentation: https://developers.themoviedb.org/3/getting-started/introduction
//Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
//Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries
//Service status: https://status.themoviedb.org

//FIREBASE
//https://cinemaada-1f3ab-default-rtdb.firebaseio.com/

// endpoints tp final: 
// /movie/${itemID}/videos
// /search/multi?
// /movie/top_rated?

//https://api.themoviedb.org/3/movie/top_rated?api_key=e5b14b46744569c8ec124eb349f2f2f6&page=2
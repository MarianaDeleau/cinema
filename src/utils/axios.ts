import axios from "axios";

const api = axios.create({
  baseURL: "https://cinemaada-1f3ab-default-rtdb.firebaseio.com/",
});


const apiCinema = axios.create({
  baseURL: process.env.REACT_APP_DB_API_TMDB,
  params: {
    apikey: process.env.REACT_APP_DB_API_TMDB_KEY
  }
});

export { api, apiCinema };
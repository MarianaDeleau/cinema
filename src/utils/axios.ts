import axios from "axios";

const api = axios.create({
  baseURL: "https://cinemaada-1f3ab-default-rtdb.firebaseio.com/",
});

const apiCinema = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e5b14b46744569c8ec124eb349f2f2f6",
  },
});

export { api, apiCinema };

import axios from "axios";

const api = axios.create({
  baseURL: "https://cinemaada-1f3ab-default-rtdb.firebaseio.com/",
});

export { api };

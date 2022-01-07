import { Item } from "../types/models";
import { apiCinema } from "../utils";
import { mapToArray } from "../helpers";

const getMovies = async (): Promise<Item[]> => {
  const response = await apiCinema.get("/movie/top_rated?");
  return mapToArray(response.data.results);
};

export { getMovies }

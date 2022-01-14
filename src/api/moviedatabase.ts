import { ApiResponse, Filter, Item } from "../types";
import { api, apiCinema } from "../utils";
import { mapToArray } from "../helpers";


const searchMulti = async ({page, search}: Filter): Promise<ApiResponse> => {
  let response;
  if (search) {
    response = await apiCinema.get<ApiResponse>(
      `/search/multi?query=${search}&page=${page}`
    );
  } else {
    response = await apiCinema.get<ApiResponse>(
      `/movie/top_rated?page=${page}`
    );
  }
  return response.data;
};


const addMovieToDB = async (data: Item) => {

await api.post('/items.json', data)

}

export const movieApi = {  searchMulti, addMovieToDB }

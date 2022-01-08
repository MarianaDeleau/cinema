import { ApiResponse, Filter } from "../types";
import { apiCinema } from "../utils";
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


export {  searchMulti }

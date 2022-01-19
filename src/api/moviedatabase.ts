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
  const dataBase = await getMoviesDB(); 
  const movieToAdd = await dataBase.find((item) => item.id === data.id); 
  !movieToAdd && await api.post('/items.json', { ...data, media_type: data.media_type || "movie" })
}

const getMoviesDB = async (): Promise<Item[]> => {
  const response = await api.get('/items.json')
  return mapToArray(response.data);
  }

  const deleteMoviesFromDB = async (id: number) => {
    const moviesDB = await getMoviesDB();
    const movieToDelete = moviesDB.find((item) => item.id === id);
    await api.delete(`/items/${movieToDelete?.idDB}.json`)
  }

 
export const movieApi = {  searchMulti, addMovieToDB, getMoviesDB, deleteMoviesFromDB }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieApi } from "../../api";
import { ApiResponse } from "../../types/models";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../constants";
import { Item } from "../../types";
import { useUsers } from "..";

const useItems = () => {
  const queryClient = useQueryClient();

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page")!) || 1;
  const search = params.get("search") || undefined;

  const navigate = useNavigate();

  const { userLogged } = useUsers();

  const [items, setItems] = useState<ApiResponse>();
  const [lastPage, setLastPage] = useState(1);
  const [itemsDB, setItemsDB] = useState<Item[]>();
  const [movieDetail, setMovieDetail] = useState<Item>();

  useEffect(() => {
    movieApi
      .searchMulti({ page, search })
      .then((response) => setItems(response));
  }, [page, search]);

  useEffect(() => {
    movieApi
      .searchMulti({ page, search })
      .then((response) => setLastPage(response.total_pages));
  }, [page, search]);

  const setPage = (newPage: number) => {
    params.set("page", newPage.toString());
    navigate(`${window.location.pathname}?${params.toString()}`);
  };

  const setSearch = (s: string) => {
    params.set("search", s);
    navigate(`${window.location.pathname}?${params.toString()}`);
  };

  const { isLoading } = useQuery(QUERY_KEYS.ITEMS, movieApi.getMoviesDB, {
    onSuccess: (data: Item[]) => {
      setItemsDB(data);
    },
  });

  const { mutateAsync: addMovieToDB } = useMutation(movieApi.addMovieToDB, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.ITEMS);
    },
  });

  const { mutateAsync: deleteMoviesFromDB } = useMutation(
    movieApi.deleteMoviesFromDB,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.ITEMS);
      },
    }
  );

  const openDetail = async (id: string) => {
    const detail = await movieApi.getMovieDB(id);
    setMovieDetail(detail.data);
  };

  const IsMovieInDB = (id: number) => {
    const IsMovieIn = itemsDB?.find((item) => item.id === id);
    if (IsMovieIn) {
      return true;
    }
  };

  const isItemViewed = (idDB: string) => {
    const viewed = userLogged?.viewed?.includes(idDB);
    return viewed;
  };

  return {
    setPage,
    setSearch,
    page,
    search,
    lastPage,
    items,
    addMovieToDB,
    isLoading,
    itemsDB,
    deleteMoviesFromDB,
    IsMovieInDB,
    openDetail,
    movieDetail,
    isItemViewed,
  };
};

export { useItems };

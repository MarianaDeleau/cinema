import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchMulti } from "../../api";
import { ApiResponse } from "../../types/models";
import { apiCinema } from "../../utils";



const useItems = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")!) || 1;
    const search = params.get("search") || undefined;

    const navigate = useNavigate();

    const [items, setItems] = useState<ApiResponse>();
    const [lastPage, setLastPage] = useState("")

    useEffect(() => {
      searchMulti({page, search}).then((response) => 
      setItems(response)); 
      pages();
      
    }, [page, search]);
    

    const pages  = async () => {
    const response = await apiCinema.get("/movie/top_rated?");
    setLastPage(response.data.total_pages)
}

    const setPage = (newPage: number) => {
      params.set("page", newPage.toString());
      navigate(`${window.location.pathname}?${params.toString()}`);
    };

    const setSearch = (s: string) => {
      params.set("search", s);
      navigate(`${window.location.pathname}?${params.toString()}`);
    };
  
    return { setPage, setSearch, page, search, lastPage, items };
  };
  
  export { useItems };
  
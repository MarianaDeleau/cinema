import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api";
import { QUERY_KEYS } from "../../constants";
import { UsersContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User, UserLoginType } from "../../types";
import { api, apiCinema } from "../../utils";

const useUsers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { updateUsers, users, userLogged, userSession} = useContext(UsersContext);


  const { isLoading } = useQuery(QUERY_KEYS.USERS, usersApi.getUsers, {
    onSuccess: (data) => {
      updateUsers(data);
    },
  });

  const { mutateAsync: addUser } = useMutation(usersApi.addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.USERS);
    },
  });


 const [tokenStorage, setTokenStorage] = useState<string | undefined>(
      localStorage.getItem("cinema-token") || undefined
    );
   useEffect(() => {
      if (tokenStorage) localStorage.setItem("cinema-token", tokenStorage);
    }, [tokenStorage]);
  
    useEffect(() => {
      loginWithToken();
    }, []);

  const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

  const createUserToken = async (user: User): Promise<string | null> => {
      const newToken = Math.random().toString(36).substring(2);
        try {
          await api.patch(`/users/${user.id}.json`, { sessionToken: newToken });
          return newToken;
      } catch (err) {
          return null;
      }
    };
  
   const userLogin = async (email: string, password: string) =>  {
     
    try {

      // const response = await api.get("/users.json");

      // /* Tarea de backend */
      // const users: User[] = mapToArray(response.data);

     const currentUser = users?.find((u) => {
      if (u.email === email && u.password === password) {
        return true;
      }
      return false;
      });

    if (currentUser) {
      const token = await createUserToken(currentUser);

      if (token) {
      setTokenStorage(token);
      userSession({ ...currentUser });
      navigate("/movies")  
       // setHasUserLoggedIn(true);
      //console.log(userLogin)
    } else {
      setHasUserLoggedIn(false);
      }
    }  else {
        throw new Error("El usuario no existe");
            }
          } catch (e) {
            // console.log(e);
          }
        }
 
  const loginWithToken = async () => {
  let user;
  try {
    const response = await api.get("/users.json");

    /* Tarea de backend */
    const users: User[] = mapToArray(response.data);

    if (tokenStorage) {
      user = users.find((user) => user.sessionToken === tokenStorage);
    }

    if (user) {
      userSession(user);
      setHasUserLoggedIn(true);
    } else {
      setHasUserLoggedIn(false);
    }
  } catch (e) {
    // console.log(e);
  }
};



    const logout = () => {
      localStorage.removeItem("cinema-token");
      //userSession(undefined);
      navigate("/login");
    };



    return { userLogin, loginWithToken, logout, addUser, isLoading, users, userSession, userLogged, hasUserLoggedIn };
  };
  


export { useUsers };
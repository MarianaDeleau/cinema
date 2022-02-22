import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api";
import { QUERY_KEYS } from "../../constants";
import { UsersContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useUsers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { updateUsers, /*users,*/ userLogged, userSession } =
    useContext(UsersContext);

  const { data: users, isLoading } = useQuery(
    QUERY_KEYS.USERS,
    usersApi.getUsers,
    {
      onSuccess: (data) => {
        updateUsers(data);
      },
    }
  );

  const { mutateAsync: addUser } = useMutation(usersApi.addUser, {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.USERS),
  });

  const { mutateAsync: deleteUser } = useMutation(usersApi.deleteUser, {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.USERS),
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
      await api.patch(`/users/${user.idDB}.json`, { sessionToken: newToken });
      return newToken;
    } catch (err) {
      return null;
    }
  };

  const userLogin = async (email: string, password: string) => {
    try {
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
          navigate("/home");
          setHasUserLoggedIn(true);
        } else {
          setHasUserLoggedIn(false);
        }
      } else {
        throw new Error("El usuario no existe");
      }
    } catch (e) {}
  };
  console.log(userLogged);

  const loginWithToken = async () => {
    let user;
    try {
      const response = await api.get("/users.json");

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
    } catch (e) {}
  };

  const logout = () => {
    localStorage.removeItem("cinema-token");
    setHasUserLoggedIn(false);
    userSession(undefined);
    navigate("/login");
  };

  const addItemToList = async (user: User | undefined, idDB: string) => {
    await usersApi.addItemtoViewed(user, idDB);
    const updatedUser = await usersApi.updateUser(user);
    console.log(updatedUser);
    userSession(updatedUser);
    //await updateUserLogged(userLogged?.idDB)
  };

  const removeItemFromList = async (user: User | undefined, idDB: string) => {
    await usersApi.removeItemFromViewed(user, idDB);
    const updatedUser = await usersApi.updateUser(user);
    console.log(updatedUser);
    userSession(updatedUser);
    //await updateUserLogged(userLogged?.idDB)
  };

  // const updateUserLogged = async (idDB: string | undefined) => {
  //   const user = await usersApi.updateUser(idDB)
  //   //userSession({...userLogged, viewed:});
  // }

  return {
    userLogin,
    loginWithToken,
    logout,
    addUser,
    isLoading,
    users,
    userSession,
    userLogged,
    hasUserLoggedIn,
    deleteUser,
    addItemToList,
    removeItemFromList /*updateUserLogged*/,
  };
};

export { useUsers };

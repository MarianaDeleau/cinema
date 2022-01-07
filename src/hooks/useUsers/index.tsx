import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api";
import { QUERY_KEYS } from "../../constants";
import { UsersContext } from "../../contexts";
import { UserLoginType } from "../../types";

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

  
  const userAuth =  (data: UserLoginType) => {
    
   const userLogin =   users?.find((u) => {
      if (u.email === data.email && u.password === data.password) {
        return true;
      }
      return false;
      });

    if (userLogin) {
      userSession({ ...userLogin });
      navigate("/movies")  
      //console.log(userLogin)
    
    } else {
      navigate('/signup')
    }   

  };
  
  return { userAuth, addUser, isLoading, users };
};

export { useUsers };
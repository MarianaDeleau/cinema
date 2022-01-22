import { createContext, FC, useState } from "react";
import { User } from "../../types";

type Context = {
  users?: User[];
  userLogged?: User | undefined;
  updateUsers: (users: User[]) => void;
  userSession: (user: User) => void;
};

const UsersContext = createContext<Context>({
  users: undefined,
  userLogged: undefined,
  updateUsers: () => {},
  userSession: () => {},
});

const UsersProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>();
  const [userLogged, setUserLogged] = useState<User>();

  const updateUsers = (users: User[]) => {
    setUsers(users);
  };

  const userSession  = (user: User) => {
    setUserLogged(user || undefined)
  }

  return (
    <UsersContext.Provider value={{ users, userLogged, updateUsers, userSession }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

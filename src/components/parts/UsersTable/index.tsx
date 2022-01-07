import { FC, useContext, useEffect } from "react";
import { UsersContext } from "../../../contexts";
import { useUsers } from "../../../hooks";

const UsersTable: FC = () => {
  const { users, isLoading } = useUsers();

  return (
    <>
      {isLoading ? (
        "Cargando..."
      ) : (
        <table>
          <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de Nacimiento</th>            
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.birthdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export { UsersTable };

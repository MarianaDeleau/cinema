import { FC, useContext, useEffect } from "react";
import { Layout } from "../..";
import { UsersContext } from "../../../contexts";
import { useUsers } from "../../../hooks";
import { Card } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { usersApi } from "../../../api";


const UsersCard: FC = () => {
  const { users, isLoading, deleteUser } = useUsers();

  return (
    <>
      {isLoading ? (
        "Cargando..."
      ) : (
        
        users?.map((u) => {
               
                  return(
                 <Card style={{ width: '18rem' }} className="cardTask shadow-lg p-2 mb-5 bg-body rounded">
                     <Card.Header>
                         <Card.Title className="fw-bold h4 text-white fs-6 fw-light badge rounded-pill bg-danger text-dark text-wrap">{(u.name.toUpperCase() + ' ' + u.lastname.toUpperCase())}</Card.Title>
                     </Card.Header>
                     <Card.Body>
                         <Card.Subtitle className="mb-2 text-muted fs-6 fw-normal">{u.email}</Card.Subtitle>
                         <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">{u.password}</Card.Subtitle>     
                         <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">{u.birthdate}</Card.Subtitle>  
                         <Card.Subtitle className="badge rounded-pill bg-secondary text-light btn ps-3 pe-3 pt-2 pb-2">{u.role}</Card.Subtitle>     
                     </Card.Body>
                         <Card.Footer>
                         <button className="btn btn-danger" type='button' onClick={()=> usersApi.deleteUser(u.idDB) }><Trash /></button> 
                         </Card.Footer>          
                 </Card>
               )})               
      )}
      
    </>
  );
};

export { UsersCard };
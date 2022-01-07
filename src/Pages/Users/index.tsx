import { FC } from 'react'
import { UsersTable } from '../../components';

const Users: FC = () => {
    
    return (
      <>
        <div className="container">
         <h1>Users</h1>
         <UsersTable/>

        </div>
      </>
    );
  };
  
  export { Users };
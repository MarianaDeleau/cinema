import { FC } from 'react'
import { Layout, UsersTable } from '../../components';

const Users: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
        <div className="container">
         <h1>Users</h1>
         <UsersTable/>

        </div>
      </Layout>
      </>
    );
  };
  
  export { Users };
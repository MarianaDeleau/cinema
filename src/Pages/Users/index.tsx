import { FC } from 'react'
import { Layout, UsersTable } from '../../components';
import { WithAuth } from '../../hoc';

const UsersPage: FC = () => {
    
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
  
  export const Users =  WithAuth(UsersPage)
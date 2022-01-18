import { FC } from 'react'
import { Layout, UsersCard, UsersTable } from '../../components';
import { WithAuth } from '../../hoc';

const UsersPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
        <div className="container">
             <UsersCard/>
        </div>
      </Layout>
      </>
    );
  };
  
  export const Users =  WithAuth(UsersPage)
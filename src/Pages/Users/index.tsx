import { FC } from 'react'
import { Layout, UsersCard } from '../../components';
import { WithAuth } from '../../hoc';

const UsersPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="users align-items-center d-flex">
        <div className="container d-flex flex-wrap justify-content-evenly">
             <UsersCard/>
        </div>
      </Layout>
      </>
    );
  };
  
  export const Users =  WithAuth(UsersPage)
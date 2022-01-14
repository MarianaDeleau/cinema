import { FC } from 'react'
import { BasicPagination, Layout } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';
import { WithAuth } from '../../hoc';

const AdminPage: FC = () => {


    return (
      <>
      <Layout mainClass="admin">
        <div className="container">       
         <CardMovie/>
        </div>
        <div className="container mt-5 mb-3 d-flex justify-content-center"> 
        <BasicPagination/>
        </div>
        </Layout>
      </>
    );
  };
  
  export const Admin = WithAuth(AdminPage) 
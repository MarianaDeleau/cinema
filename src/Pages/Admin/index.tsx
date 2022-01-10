import { FC } from 'react'
import { BasicPagination, Layout } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';

const Admin: FC = () => {


    return (
      <>
      <Layout mainClass="admin">
        <div className="container">
         <h1>Admin</h1>
         <CardMovie/>
        </div>
        <BasicPagination/>
        </Layout>
      </>
    );
  };
  
  export { Admin };
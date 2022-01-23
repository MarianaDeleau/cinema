import { FC } from 'react'
import { BasicPagination, InputSearch, Layout } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';

const AdminPage: FC = () => {

  const { setSearch } = useItems();  
  
    return (
      <>
      <Layout mainClass="admin">
        <div className="container">
          <InputSearch handleChange={setSearch}/>       
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
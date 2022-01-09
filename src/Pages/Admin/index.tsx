import { FC } from 'react'
import { BasicPagination } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';

const Admin: FC = () => {


    return (
      <>
        <div className="container">
         <h1>Admin</h1>
         <CardMovie/>
        </div>
        <BasicPagination/>
      </>
    );
  };
  
  export { Admin };
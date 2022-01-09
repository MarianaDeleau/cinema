import { FC } from 'react'
import { BasicPagination } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';
import { useItems } from '../../hooks/useItems';

const Admin: FC = () => {

  const { setPage, page, lastPage,  } = useItems();  


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
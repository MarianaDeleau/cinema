import { FC } from 'react'
import { Paginator } from '../../components';
import { CardMovie } from '../../components/parts/CardMovie';

const Admin: FC = () => {
    
    return (
      <>
        <div className="container">
         <h1>Admin</h1>
         <CardMovie/>
        </div>
      </>
    );
  };
  
  export { Admin };
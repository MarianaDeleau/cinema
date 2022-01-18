import { FC } from 'react'
import { Layout } from '../../components';
import { UserCardMovie } from '../../components/parts/UserCardMovie';
import { WithAuth } from '../../hoc';

const MoviesPage: FC = () => {
    
    return (
      <>
       <Layout mainClass="admin">
        <div className="container">       
         <UserCardMovie media_type='movie'/>
        </div>
       
        </Layout>
      </>
    );
  };
  
  export const Movies =  WithAuth(MoviesPage)
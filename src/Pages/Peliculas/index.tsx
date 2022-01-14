import { FC } from 'react'
import { Layout } from '../../components';
import { WithAuth } from '../../hoc';

const MoviesPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
      <div className="container">
         <h1>Peliculas</h1>
        </div>
      </Layout>
      </>
    );
  };
  
  export const Movies =  WithAuth(MoviesPage)
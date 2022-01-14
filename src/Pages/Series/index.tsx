import { FC } from 'react'
import { Layout } from '../../components';
import { WithAuth } from '../../hoc';

const SeriesPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
        <div className="container">
         <h1>Series</h1>
        </div>
        </Layout>
      </>
    );
  };
  
  export const Series =  WithAuth(SeriesPage)
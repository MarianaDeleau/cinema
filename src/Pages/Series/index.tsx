import { FC } from 'react'
import { Layout } from '../../components';
import { UserCardMovie } from '../../components/parts/UserCardMovie';
import { WithAuth } from '../../hoc';

const SeriesPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="series">
        <div className="container d-flex flex-wrap justify-content-center">
          <UserCardMovie media_type='tv'/>        
        </div>
      </Layout>
      </>
    );
  };
  
  export const Series =  WithAuth(SeriesPage)
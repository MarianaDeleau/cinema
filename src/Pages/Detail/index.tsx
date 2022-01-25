import { FC } from 'react'
import { Layout } from '../../components'
import { WithAuth } from '../../hoc';
import { DetailCard } from '../../components/parts/Detail'
import { UserCardMovie } from '../../components/parts/UserCardMovie';

const DetailPage: FC = () => {
  
  
  
    return (
      <>
     <Layout mainClass="detail">
        <div className="container">
          <DetailCard/>
        </div>
        <div className="container d-flex  justify-content-start me-5 mt-5">
          <h2>Also...</h2>
        </div>
        <div className="container d-flex flex-wrap justify-content-center">
          <UserCardMovie media_type='movie'/>        
          <UserCardMovie media_type='tv'/>      
        </div>
    </Layout>
      </>
    );
  };
  
  export const Detail =  WithAuth(DetailPage)
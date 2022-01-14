import { FC } from 'react'
import { Layout } from '../../components'
import { WithAuth } from '../../hoc';

const DetailPage: FC = () => {
    
    return (
      <>
     <Layout mainClass="admin">
        <div className="container">
         <h1>Detail</h1>
        </div>
    </Layout>
      </>
    );
  };
  
  export const Detail =  WithAuth(DetailPage)
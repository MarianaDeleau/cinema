import { FC } from 'react'
import { Layout } from '../../components'
import { WithAuth } from '../../hoc';
import { DetailCard } from '../../components/parts/Detail'
const DetailPage: FC = () => {
  const params = new URLSearchParams(window.location.search);
  
    return (
      <>
     <Layout mainClass="detail">
        <div className="container">
          <DetailCard idDetail={params.get('id')!}/>
        </div>
    </Layout>
      </>
    );
  };
  
  export const Detail =  WithAuth(DetailPage)
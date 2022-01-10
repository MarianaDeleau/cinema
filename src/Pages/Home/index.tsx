import { FC } from 'react'
import { Layout } from '../../components';

const Home: FC = () => {
    
    return (
      <>
      <Layout mainClass="home">
        <div className="container">
         <h1>Home</h1>
        </div>
        </Layout>
      </>
    );
  };
  
  export { Home };
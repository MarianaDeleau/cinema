import { FC } from 'react'
import { Layout } from '../../components';
import { WithAuth } from '../../hoc';

const HomePage: FC = () => {
    
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
  
  export const Home =  WithAuth(HomePage);
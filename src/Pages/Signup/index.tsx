import { FC } from 'react'
import { Layout } from '../../components';
import { AddUsers } from '../../components/forms/AddUsers';

const Signup: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
        <div className="container">
         <h1>Signup</h1>
         <AddUsers/>
        </div>
      </Layout>
      </>
    );
  };
  
  export { Signup };
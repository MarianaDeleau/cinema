import { FC } from 'react'
import { Layout } from '../../components';
import { AddUsers } from '../../components/forms/AddUsers';
import { WithAuth } from '../../hoc';

const SignupPage: FC = () => {
    
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
  
  export const Signup =  WithAuth(SignupPage);
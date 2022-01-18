import { FC } from 'react'
import { Layout, LoginUser } from '../../components';
import { WithAuth } from '../../hoc';


const LoginPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
          <LoginUser/>
      </Layout>
      </>
    );
  };
  
  export const Login =  WithAuth(LoginPage);

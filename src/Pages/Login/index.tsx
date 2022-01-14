import { FC } from 'react'
import { Layout, LoginUser } from '../../components';
import { WithAuth } from '../../hoc';


const LoginPage: FC = () => {
    
    return (
      <>
      <Layout mainClass="login">
        <div className="container">
         <h1>Login Usuario</h1>
          <LoginUser/>
        </div>
        </Layout>
      </>
    );
  };
  
  export const Login =  WithAuth(LoginPage);

import { FC } from 'react'
import { Layout, LoginUser } from '../../components';


const Login: FC = () => {
    
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
  
  export { Login };

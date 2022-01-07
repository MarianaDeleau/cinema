import { FC } from 'react'
import { AddUsers } from '../../components/forms/AddUsers';

const Signup: FC = () => {
    
    return (
      <>
        <div className="container">
         <h1>Signup</h1>
         <AddUsers/>
        </div>
      </>
    );
  };
  
  export { Signup };
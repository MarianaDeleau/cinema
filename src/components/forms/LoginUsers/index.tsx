import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../../hooks';
import { UserLoginType } from '../../../types';
import { defaultValues } from './defaultValues'
import { validationSchema } from './validationSchema'

const LoginUser: FC = () => {
    
    const { userLogin } = useUsers(); 
  

    const { handleSubmit, register, formState } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
      });

      const onSubmit = async (data: { email: string; password: string }) => {
        try {
          await userLogin(data.email, data.password);
        } catch (e) {
          // setAlert(e.message);
        }
      };

    return (
        <div className="container">
        
          <h4>Por favor ingrese su usuario:</h4>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"                      
                 {...register("email")}  
                />
                <span className="text-danger">{formState.errors.email?.message}</span>
              </div>
              <div>
                <label htmlFor="pass">Contraseña</label>
                <input
                  id="pass"
                  type="password"                  
                 {...register("password")}
                />
                  <span className="text-danger">
            {formState.errors.password?.message}
          </span>
              </div>
              <button type="submit">Iniciar sesión</button>
            </form>
        </div>
     
    );
  };
  
  export { LoginUser };

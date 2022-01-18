import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUsers } from "../../../hooks";
import { AddUserType } from "../../../types/models";
import { useNavigate } from "react-router-dom";


const AddUsers: FC = () => {
    const { addUser } = useUsers();
  
    const navigate = useNavigate();

    const { handleSubmit, register, formState } = useForm({
      defaultValues,
      resolver: yupResolver(validationSchema),
    });
  
    const onSubmit = async (data: AddUserType) => {
      await addUser(data);
      navigate("/login");
    };
  
    return (
      <div className="d-flex flex-column">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="d-flex flex-wrap flex-column">
      <h2>Sign-up</h2>
      <h6>Por favor regístrese:</h6>
        <div className="form-group">
          <label htmlFor="">Nombre: </label>
          <input type="text" {...register("name")} />
          <span className="text-danger">{formState.errors.name?.message}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido: </label>
          <input type="text" {...register("lastname")} />
          <span className="text-danger">{formState.errors.name?.message}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Email: </label>
          <input type="email" {...register("email")} />
          <span className="text-danger">{formState.errors.email?.message}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Nacimiento: </label>
          <input type="date" {...register("birthdate")} />
          <span className="text-danger">
            {formState.errors.birthdate?.message}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">Password: </label>
          <input type="password" {...register("password")} />
          <span className="text-danger">
            {formState.errors.password?.message}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="" hidden>Role</label>
          <input type="text" {...register("role")} disabled value="user" hidden/>
        </div>
        <div className="form-group">
          <label htmlFor="" hidden>Viewed</label>
          <input type="text" {...register("viewed")} hidden />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
      </div>
    );
  };
  
  export { AddUsers };
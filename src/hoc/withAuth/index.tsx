import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../components/common/Loading";
import { useUsers } from "../../hooks/useUsers"

// Verficar si existe una sesión activa y en caso de no existir
// carga la pagina de Login.
// Si hay un usuario en sesión, entonces se carga el componente
// actual o, si vengo de login o signup, tengo que enviar a
// la pagina principal.

const publicRoutes = ["/login", "/sign-up"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {

    const navigate = useNavigate();
    const location = useLocation()

    const { hasUserLoggedIn  } = useUsers();

    if (hasUserLoggedIn === undefined) return <Loading />;

    if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) navigate("/");

    if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))
      navigate("/login");

    return <Component />;
  };

  return Authenticated;
};

export { WithAuth };

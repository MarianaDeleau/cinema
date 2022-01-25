import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../components/common/Loading";
import { useUsers } from "../../hooks/useUsers"


const publicRoutes = ["/login", "/signup"];

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

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LockIcon from "@mui/icons-material/Lock";
import MovieIcon from "@mui/icons-material/Movie";
import { ExitToAppRounded } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { useUsers } from "../../../hooks";
import { PersonOutline, PersonAdd } from "@mui/icons-material";
import { Search } from "@mui/icons-material";

const NavbarApp = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  const { userLogged } = useUsers();

  const routes = [
    "/signup",
    "/login",
    "/home",
    "/movies",
    "/series",
    "/users",
    "/admin",
    "/detail",
    "/",
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { logout } = useUsers();

  return (
    <Tabs
      value={location.pathname}
      onChange={handleChange}
      aria-label="icon label tabs example"
      className="navbar"
    >
      {!userLogged && (
        <Tab
          icon={<PersonAdd />}
          label="SIGNUP"
          component={NavLink}
          to={"/signup"}
          value={routes[0]}
        />
      )}
      {!userLogged && (
        <Tab
          icon={<PersonOutline />}
          label="LOGIN"
          component={NavLink}
          to={"/login"}
          value={routes[1]}
        />
      )}
      <Tab
        icon={<HomeIcon />}
        label="HOME"
        component={NavLink}
        to={"/home"}
        value={routes[2]}
      />
      <Tab
        icon={<MovieIcon />}
        label="MOVIES"
        component={NavLink}
        to={"/movies"}
        value={routes[3]}
      />
      <Tab
        icon={<TvRoundedIcon />}
        label="SERIES"
        component={NavLink}
        to={"/series"}
        value={routes[4]}
      />
      {userLogged?.role === "admin" && (
        <Tab
          icon={<PersonPinIcon />}
          label="USERS"
          component={NavLink}
          to={"/users"}
          value={routes[5]}
        />
      )}
      {userLogged?.role === "admin" && (
        <Tab
          icon={<LockIcon />}
          label="ADMIN"
          component={NavLink}
          to={"/admin"}
          value={routes[6]}
        />
      )}
      {window.location.pathname === "/detail" && (
        <Tab
          icon={<Search />}
          label="DETAIL"
          component={NavLink}
          to={"/detail"}
          value={routes[7]}
        />
      )}
      <Tab
        icon={<ExitToAppRounded />}
        label="EXIT"
        component={NavLink}
        to={"/"}
        onClick={logout}
        value={false}
      />
    </Tabs>
  );
};

export { NavbarApp };

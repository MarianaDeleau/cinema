import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockIcon from '@mui/icons-material/Lock';
import CameraIcon from '@mui/icons-material/Camera';
import MovieIcon from '@mui/icons-material/Movie';
import { ExitToAppRounded } from '@mui/icons-material';
import { Home, Movies, Series } from '../../../pages';
import { NavLink, useNavigate } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

const NavbarApp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs  onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<HomeIcon />} label="HOME" component={NavLink} to={"/"} />
      <Tab icon={<MovieIcon />} label="MOVIES" component={NavLink} to={"/movies"} />
      <Tab icon={<TvRoundedIcon />} label="SERIES" component={NavLink} to={"/series"}/>
      <Tab icon={<PersonPinIcon />} label="USERS" component={NavLink} to={"/users"}/>
      <Tab icon={<LockIcon />} label="ADMIN" component={NavLink} to={"/admin"}/>
      <Tab icon={<ExitToAppRounded />} label="EXIT" component={NavLink} to={"/"}/>
    </Tabs>
  );
};

export { NavbarApp };
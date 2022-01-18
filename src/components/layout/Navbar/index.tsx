import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockIcon from '@mui/icons-material/Lock';
import MovieIcon from '@mui/icons-material/Movie';
import { ExitToAppRounded } from '@mui/icons-material';
import { NavLink, useLocation} from 'react-router-dom';
import { useUsers } from '../../../hooks';


const NavbarApp = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation()
  const routes = ['/', '/movies', '/series', '/users', '/admin', '/' ]
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const { logout } = useUsers()

  return (
    <Tabs  value={location.pathname} onChange={handleChange} aria-label="icon label tabs example">      
      <Tab icon={<HomeIcon />} label="HOME" component={NavLink} to={'/'} value={routes[0]}/>
      <Tab icon={<MovieIcon />} label="MOVIES" component={NavLink} to={'/movies'} value={routes[1]}/>
      <Tab icon={<TvRoundedIcon />} label="SERIES" component={NavLink} to={'/series'} value={routes[2]}/>
      <Tab icon={<PersonPinIcon />} label="USERS" component={NavLink} to={'/users'} value={routes[3]}/>
      <Tab icon={<LockIcon />} label="ADMIN" component={NavLink} to={'/admin'} value={routes[4]}/>
      <Tab icon={<ExitToAppRounded />} label="EXIT" component={NavLink} to={'/'} onClick={logout} value={false}/>
    </Tabs>
  );
};

export { NavbarApp };

// {menuItems.map((item) => {

//   return (
//     <Tab icon={<MovieIcon/>} label={item.label} component={NavLink} to={item.href} />
//   )
//   })}  

  
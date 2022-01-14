import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockIcon from '@mui/icons-material/Lock';
import MovieIcon from '@mui/icons-material/Movie';
import { ExitToAppRounded } from '@mui/icons-material';
import { NavLink} from 'react-router-dom';
import { useUsers } from '../../../hooks';


const NavbarApp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const { logout } = useUsers()

  return (
    <Tabs  value={false} onChange={handleChange} aria-label="icon label tabs example">      
      <Tab icon={<HomeIcon />} label="HOME" component={NavLink} to={'/'} />
      <Tab icon={<MovieIcon />} label="MOVIES" component={NavLink} to={'/movies'} />
      <Tab icon={<TvRoundedIcon />} label="SERIES" component={NavLink} to={'/series'}/>
      <Tab icon={<PersonPinIcon />} label="USERS" component={NavLink} to={'/users'}/>
      <Tab icon={<LockIcon />} label="ADMIN" component={NavLink} to={'/admin'}/>
      <Tab icon={<ExitToAppRounded />} label="EXIT" component={NavLink} to={'/'} onClick={logout}/>
    </Tabs>
  );
};

export { NavbarApp };

// {menuItems.map((item) => {

//   return (
//     <Tab icon={<MovieIcon/>} label={item.label} component={NavLink} to={item.href} />
//   )
//   })}  

  
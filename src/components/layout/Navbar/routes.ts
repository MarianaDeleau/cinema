import TvRoundedIcon from '@mui/icons-material/TvRounded';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockIcon from '@mui/icons-material/Lock';
import MovieIcon from '@mui/icons-material/Movie';
import { Home, Movies, Series, Admin, Users } from '../../../pages';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ExitToAppRounded } from '@mui/icons-material';



 const menuItems = [
    {
      href: "/",
      label: "HOME",
      icon: HomeIcon,
      
    },
    {
      href: "/movies",
      label: "MOVIES",
      icon: MovieIcon,
     
    },
    {
      href: "/series",
      label: "SERIES",
      icon: TvRoundedIcon,
      
    },
      {
        href: "/users",
        label: "USERS",
       icon: PersonPinIcon,
       
      },
      {
        href: "/admin",
        label: "ADMIN",
        icon: LockIcon,
        
    },
    {
      href: "/",
      label: "EXIT",
      icon: ExitToAppRounded,
      
    }
      
    ];

export {menuItems}

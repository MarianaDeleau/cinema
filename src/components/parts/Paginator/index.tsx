import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FC } from 'react'
import { useItems } from '../../../hooks/useItems';


const BasicPagination: FC = () => {

    const { setPage, page, lastPage,  } = useItems();  

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
         setPage(value);
         window.scroll(0,0);
    }

    return (
      <Stack spacing={5}>
        <Pagination page={page} count={Number(lastPage)} color="primary" onChange={handleChange} />        
      </Stack>
    ); 
  }

export {BasicPagination}
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FC } from 'react'
import {  makeStyles } from '@mui/material/styles'
import { setSourceMapRange } from 'typescript';
import { useItems } from '../../../hooks/useItems';


// type Props = {
//     currentPage: number;
//     totalPages: string;
//     changePages: (newPage: number) => void;
// }

// const Paginator: FC<Props> = ({currentPage, totalPages, changePages}) => {
    

//     return (
//         <div id="resultsPagination" className="results__pagination">
//             <button className="paginationBtn" onClick={() => changePages(Number(totalPages)-(Number(totalPages) - 1))}>
//                 <i className="fas fa-backward"></i>
//             </button>
//             <button className="paginationBtn" onClick={() => changePages(currentPage-1)}>
//                 <i className="fas fa-step-backward"></i>
//             </button>
//             <button className="paginationBtn" onClick={() => changePages(currentPage+1)}>
//                 <i className="fas fa-step-forward"></i>
//             </button>
//             <button id="btnEnd" className="paginationBtn" onClick={() => changePages(Number(totalPages))}>
//                 <i className="fas fa-forward"></i>
//             </button>
//         </div>
//         )
// }


// export {Paginator}

// const useStyles = makeStyles(theme =>
//   ({
//     root: {
//         position: 'fixed',
//         backgroundColor: theme.palette.red,
//         bottom: 0,
//         zIndex: 200,
//         padding: '10px 80px'
//     },
//     container: {

//     }
//   }),
// );

// type Props = {
//     totalPages: string;
// } 

const BasicPagination: FC = () => {

    const { setPage, page, lastPage,  } = useItems();  

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
         setPage(value);
         window.scroll(0,0);
    }
    //const classes = useStyles();

    return (
      <Stack spacing={2}>
        <Pagination page={page} count={Number(lastPage)} color="primary" onChange={handleChange} />        
      </Stack>
    ); 
  }

export {BasicPagination}
import { FC } from "react"
import { useItems } from "../../../hooks/useItems";
import { BasicRating } from "../Rating";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const CardMovie: FC = () => {
    
    const { items } = useItems();  
    
    return (
        <div className="container">
            {items?.results.map((item) => {
                return (
                    <div key={item.id} data-id={item.id}>
                    <div>
                        <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} title={item.title} />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <h4>{item.vote_average}</h4>
                    </div>
                    <Box
                    sx={{ '& > legend': { mt: 2 }, }} >      
                    <Typography component="legend">Value</Typography>
                    <Rating name="read-only" value={item.vote_average} precision={0.1} max={10} readOnly />                  
                    </Box>

                </div>
                )
            })
       
            }
        </div>
    )
}


export { CardMovie }
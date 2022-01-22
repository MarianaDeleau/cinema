import { FC } from "react"
import { useItems } from "../../../hooks/useItems";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { movieApi } from '../../../api';

const CardMovie: FC = () => {
    
    const { items, IsMovieInDB } = useItems();  


        return (
          <div className="container d-flex flex-wrap justify-content-center ">  
        
          {items?.results.map ((item)=>  { return (
          <Card sx={{ width: 200, margin: 2 }} className="card_movie">
            <CardActionArea>
              <CardMedia component="img"  height="300" width="150" image={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
              />
              <CardContent sx={{ height: 200 }}>
                <Typography  component="div" sx={{ color: 'gray', fontWeight: 500, fontSize: 18, textAlign: 'center', lineHeight: 1.2 }}>
                <p>{item.title || item.name}</p>
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                <p>{item.vote_average}</p>
                </Typography>
              <Box
                    sx={{ '& > legend': { mt: 2 }, color: "gray", textAlign: 'center' }} >      
                    <Rating name="read-only" value={item.vote_average && item.vote_average/2} precision={0.5} max={5} readOnly />                  
              </Box>
              </CardContent>
            </CardActionArea>
            {!IsMovieInDB(item.id) && <CardActions sx={{ justifyContent: 'center' }}>
           <Button size="small" sx={{ backgroundColor: 'red', width: 120 }} type="submit" onClick={()=> {movieApi.addMovieToDB(item)} }>AGREGAR</Button> 
            </CardActions>}
            {IsMovieInDB(item.id) &&<CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" sx={{ backgroundColor: 'black', width: 120 }} type="submit" onClick={()=> {movieApi.deleteMoviesFromDB(item.id)} }>REMOVER</Button>
            </CardActions>}
          </Card>
         )})}
          </div>
          );
      }
    // return (
    //     <div className="container">
    //         {items?.results.map((item) => {
    //             return (
    //                 <Card key={item.id} data-id={item.id}>
    //                 <div>
    //                     <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} title={item.title} />
    //                 </div>
    //                 <div>
    //                     <h3>{item.title}</h3>
    //                     <h4>{item.vote_average}</h4>
    //                 </div>
    //                 <Box
    //                 sx={{ '& > legend': { mt: 2 }, }} >      
    //                 <Rating name="read-only" value={item.vote_average/2} precision={0.5} max={5} readOnly />                  
    //                 </Box>

    //             </Card>
    //             )
    //         })
       
    //         }
    //     </div>
    // )



export { CardMovie }
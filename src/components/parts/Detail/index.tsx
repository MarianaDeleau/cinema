import { FC, useState } from "react"
import { useItems } from "../../../hooks/useItems";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { movieApi } from '../../../api';
import { Item } from "../../../types";
import { useParams } from "react-router-dom";


type Props = {
  idDetail: string,
}

const DetailCard: FC<Props> = ({idDetail}) => {
    
    const { openDetail, movieDetail } = useItems()

    openDetail(idDetail);
      

    return (
          <div className="container d-flex flex-wrap justify-content-center ">  
        
          
          <Card sx={{ width: 600, margin: 2 , height: 800,}} className="card_detail">
            <CardActionArea>
              <CardMedia component="img"  height="300" width="150" image={`http://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
                  alt={movieDetail?.title || movieDetail?.name}
                />
                <CardContent sx={{ height: 200 }}>
                    <Typography  component="div" sx={{ color: 'gray', fontWeight: 500, fontSize: 18, textAlign: 'center', lineHeight: 1.2 }}>
                    <p>{movieDetail?.title}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Resumen: {movieDetail?.overview}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Lanzamiento: {movieDetail?.release_date}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Language: {movieDetail?.original_language}</p>
                    </Typography>
                  <Box sx={{ '& > legend': { mt: 2 }, color: "gray", textAlign: 'center' }} >      
                        <Rating name="read-only" value={1} precision={0.5} max={5} readOnly />                  
                  </Box>
                </CardContent>
            </CardActionArea>
          </Card>
          </div>
          );
      }

      export { DetailCard }
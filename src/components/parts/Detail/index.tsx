import { FC, useEffect } from "react"
import { useItems } from "../../../hooks/useItems";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea } from '@mui/material';



// type Props = {
//   idDetail: string,
// }

const DetailCard: FC/*<Props>*/ = (/*{idDetail}*/) => {
    
    const { openDetail, movieDetail } = useItems()
    const params = new URLSearchParams(window.location.search);

    const idDetail = params.get('id')

    useEffect(() => {
      openDetail(idDetail!);
    },[]);

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
                    <p>Lanzamiento: {movieDetail?.release_date || movieDetail?.first_air_date}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Language: {movieDetail?.original_language}</p>
                    </Typography>
                  <Box sx={{ '& > legend': { mt: 2 }, color: "gray", textAlign: 'center' }} >      
                        <Rating name="read-only" value={movieDetail?.vote_average &&movieDetail?.vote_average/2} precision={0.5} max={5} readOnly />                  
                  </Box>
                  {/* <iframe width="560" height="315" src={movieDetail?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </CardContent>
            </CardActionArea>
          </Card>
          </div>
          );
      }

      export { DetailCard }
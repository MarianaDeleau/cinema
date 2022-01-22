import { FC, useEffect, useState } from "react"
import { useItems } from "../../../hooks/useItems";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea } from '@mui/material';
import { movieApi } from '../../../api'
import { Trailer } from '../../../types'
import { wrap } from "module";


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

    const [trailers, setTrailers] = useState<Trailer[]>([])

    useEffect(() => {
movieApi.getTrailers(movieDetail?.id!)
  .then((results) => setTrailers(results)
  )},[movieDetail]);
  
  console.log(trailers)
    return (
          <div className="container d-flex flex-wrap justify-content-center ">        
          <Card sx={{ width: 'auto', margin: 2 , height: 800,  display: 'flex', borderRadius: 15, padding: 4}} className="card_detail">
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardContent sx={{ height: 300 }}>
                    <Typography  component="div" sx={{ color: 'gray', fontWeight: 600, fontSize: 30, textAlign: 'center', lineHeight: 1.2, marginTop: 10 }}>
                    <p>{movieDetail?.title || movieDetail?.name}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 500, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Resumen: {movieDetail?.overview}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Lanzamiento: {movieDetail?.release_date || movieDetail?.first_air_date}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontWeight: 400, fontSize: 15, textAlign: 'center', lineHeight: 1.2   }}>
                    <p>Language: {movieDetail?.original_language}</p>
                    </Typography>
                    <Box sx={{ '& > legend': { mt: 2 }, color: "gray", textAlign: 'center', display: 'flex', flexWrap: 'nowrap' } } >      
                          <Rating name="read-only" value={movieDetail?.vote_average &&movieDetail?.vote_average/2} precision={0.5} max={5} readOnly />                  
                    </Box>    
                    <Box sx={{ '& > legend': { mt: 2 }, color: "gray", textAlign: 'center' }} >      
                    {trailers?.map((video) => (
                          <div  className={`col-md-${ trailers.length === 1 ? 12 : 6 } mb-3`} >
                            <iframe
                              width="100%"
                              height={trailers.length === 1 ? 320 : 215}
                              src={`https://www.youtube.com/embed/${video.key}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                         </div>
                        ))}        
                    </Box> 
                  </CardContent>
                </CardActionArea>
              </Box>
            <CardMedia component="img"  /*height="300" width="50"*/ sx={{width: 400, height: 600, borderRadius: 10}} image={`http://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt={movieDetail?.title || movieDetail?.name}/>
          </Card>
        </div>
        );
  }

      export { DetailCard }

                    // {/* <iframe width="560" height="315" src={movieDetail?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
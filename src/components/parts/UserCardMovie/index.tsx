import { Box, Card, Rating, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useItems, useUsers } from '../../../hooks'
import { FC } from "react";
import { useNavigate } from 'react-router-dom'
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { usersApi } from '../../../api'
import { useQueryClient } from "react-query";


type Props = {
  media_type: string;  
}

const UserCardMovie: FC<Props> = ({media_type}) => {
    
    const { itemsDB, isItemViewed } = useItems()
    const { userLogged, addItemToList } = useUsers()

    const navigate = useNavigate()

       return (
          <>  
          {itemsDB?.map ((item) =>  { 
            if (item.media_type === media_type)  { return (
              <Card sx={{ width: 200, margin: 2 }} className="card_movie" >
                <CardActionArea onClick={() => navigate(`/detail?id=${item.idDB}`)}>                      
                        <CardMedia component="img"  height="300" width="150" image={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}/>  
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
                <CardActions sx={{ justifyContent: 'center' }}>
                  { !isItemViewed(item.idDB) &&  <Button size="medium" sx={{ backgroundColor: 'red', width: 120 }} type="submit" onClick={()=> {addItemToList( userLogged,  item.idDB)} }><EyeSlashFill/></Button>}
                  { isItemViewed(item.idDB) && <Button size="medium" sx={{ backgroundColor: 'gray', width: 120 }} type="submit" onClick={()=> {usersApi.removeItemFromViewed(userLogged,  item.idDB)} }><EyeFill/></Button>}
                </CardActions>
              </Card>
        
         )}
         return ''
         })}
          </>
          );
      }

      export { UserCardMovie }
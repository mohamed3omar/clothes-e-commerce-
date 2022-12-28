import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import image from '../../assets/images/Tshirt.jpg'
import {Link} from 'react-router-dom'
export default function Caard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="..."
          maxWidth='100%'
        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            T - shirt
          </Typography>
          <Typography variant="body2" color="text.secondary">
          80% Cotton 20% Polyester Mens Pullover Sweatshirts Hoodies
          </Typography>
          <Typography st={{marginY:'15px'}}>
            50 $
          </Typography>
          <Link to="/checkout">
            <Button style={{backgroundColor:'#000' , color:'#fff'}} variant="contained" st={{backgroundColor:'#000'}} endIcon={<ShoppingCartIcon/>} >Buy Now</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
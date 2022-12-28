import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import image from '../../assets/images/clothes.webp'
import {Link} from 'react-router-dom'
export default function Caard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="..."
        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Clothing set
          </Typography>
          <Typography variant="body2" color="text.secondary">
            men's clothing set with oxford shoes , watch, sunglasses, 
            office shirt , tie, and jacket isolated on a white background, top view
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
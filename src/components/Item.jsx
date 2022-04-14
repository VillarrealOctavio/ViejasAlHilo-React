import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import { Link } from 'react-router-dom';

const Item = ({tipo, precio, img, clase, id}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            src={img}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tipo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Viejas al Hilo
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Clase: {clase}</Button>
            <Button size="small">$ {precio}</Button>
            <Link to='/item/${id}'>
              <Button size="small">Detalle</Button>
            </Link>  
          </CardActions>
        </Card>
    );
}
export default Item;

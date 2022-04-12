import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 


const Item = ({tipo, precio, img}) => {
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
              Viejas al Hilo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tipo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">$ {precio}</Button>
            <Button size="small">Detalle</Button>
          </CardActions>
        </Card>
    );
}
export default Item;

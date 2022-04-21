import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }
    return (
        <> 
            {
                item ?
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Viejas al Hilo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.tipo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">$ {item.precio}</Button>
                    <Button size="small">Detalle</Button>
                </CardActions>
                {
                    itemCount === 0
                    ? <ItemCount initial={itemCount} onAdd={onAdd} />
                    : <Link to='./Cart'><Button variant="contained" color="secondary">CheckOut</Button></Link>
                }
                </Card> : 
                <p>Cargando...</p>
            }
        </>
    );
}
export default ItemDetail;
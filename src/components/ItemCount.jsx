import {useState} from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = () => {
    const [rate, setRate] = useState(0);
    const agregar = ()=>{
        if (rate < 5){
            setRate(rate + 1)
        }
    }

    const quitar = () => {
        if(rate > 1){
            setRate(rate - 1);
        }
    }

    const agregarAlCarrito = () => {
        if(rate > 1){
            alert('Productos agregados exitosamente!!')
        }else if(rate == 1){
           alert('Producto agregado exitosamente')
        }else{
            alert('No hay productos en el carrito')
        }
    }

    return(
        <div className="d-flex flex-row justify-content-around">
            <div className="d-flex flex-row justify-content-between">
                <Button onClick={quitar} variant="contained">-</Button>  
                <div>{rate}</div>
                <Button onClick={agregar}variant="contained">+</Button>
            </div>
            <Button variant="outlined" onClick={agregarAlCarrito}>
                <AddShoppingCartIcon/>
            </Button>
        </div>
    );
}

export default ItemCount;
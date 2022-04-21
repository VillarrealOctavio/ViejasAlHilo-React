import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import stockBolsos from './products'
import MediaCard from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
     
        useEffect(() => {
        customFetch(2000, stockBolsos.filter(item => {
            if (idCategory === undefined) return item;
            return item.clase === idCategory
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);
    
    return(
            <>
                <List>
                    <ListItem className='d-flex flex-column'>
                        <ListItemText primary="Viejas al Hilo"/>
                        <ItemList productos={datos}/>
                    </ListItem>
                </List>
            </>
        );
    };

export default ItemListContainer;

// https://api.mercadolibre.com/sites/MLA/search?q=mate    (API DE MELI)
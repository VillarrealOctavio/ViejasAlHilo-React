import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
const { stockBolsos } = require('./products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        customFetch(2000, stockBolsos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    
        return(
            <>
                <List>
                    <ListItem className='d-flex flex-column'>
                        <ListItemText primary="Viejas al Hilo"/>
                        <ItemCount stock={5} initial={1}/>
                        <ItemList productos={datos}/>
                    </ListItem>
                </List>
            </>
        );
    };

export default ItemListContainer;
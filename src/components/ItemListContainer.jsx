import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ItemCount from './ItemCount';


class ItemListContainer extends React.Component{
    render(){
        return(
            <>
                <List>
                    <ListItem className='d-flex flex-column'>
                        <ListItemText primary="Viejas al Hilo"/>
                        <ItemCount/>
                    </ListItem>
                </List>
            </>
        );
    };
};

export default ItemListContainer;
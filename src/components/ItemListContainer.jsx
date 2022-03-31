import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


class ItemListContainer extends React.Component{
    render(){
        return(
            <>
                <List>
                    <ListItem>
                        <ListItemText primary="Viejas al Hilo"/>
                    </ListItem>
                </List>
            </>
        );
    };
};

export default ItemListContainer;
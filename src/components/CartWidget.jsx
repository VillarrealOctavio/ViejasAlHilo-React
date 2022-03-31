import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import Badge from '@mui/material/Badge';

class CartWidget extends React.Component{
    render(){
        return(
            <>
                <Badge badgeContent={4}>
                    <ShoppingCartIcon/>
                </Badge>
            </>
        );
    }
}
export default CartWidget;
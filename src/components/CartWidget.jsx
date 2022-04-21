import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import Badge from '@mui/material/Badge';

const CartWidget = () => {
        return(
            <>
                <Badge badgeContent={4}>
                    <ShoppingCartIcon/>
                </Badge>
            </>
        );
    }

export default CartWidget;
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
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
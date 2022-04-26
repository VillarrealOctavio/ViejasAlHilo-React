import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import FormatNumber from '../utils/FormatNumber';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Link to='/'><button>Seguir comprando</button></Link>
            {
                (test.cartList.length > 0)
                ?<button onClick={test.removeList}>Borrar todos los productos</button>
                : <button>TU CARRITO ESTÁ VACÍO</button>
            }

            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem} />
                            <Details>
                            <span>
                                <b>Product:</b> {item.nameItem}
                            </span>
                            <button type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.costItem} each</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
                    {
                        test.cartList.length > 0 && 
                        <div>
                            <h3>Resumen de su orden</h3>
                            <div>
                                <h5>Subtotal</h5>
                                <div><FormatNumber number={test.calcSubTotal()}/></div>
                            </div>
                            <div>
                                <h5>Impuestos</h5>
                                <div><FormatNumber number={test.calcSubTotal()}/></div> 
                            </div>
                            <div>
                                <h5>Descuentos</h5>
                                <div><FormatNumber number={test.calcSubTotal()}/></div>
                            </div>
                            <div>
                                <h5>Total</h5>
                                <div><FormatNumber number={test.calcSubTotal()}/></div>
                            </div>
                        </div>
                    }
        </WrapperCart>
    );
}

export default Cart;
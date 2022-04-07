 
const Item = ({tipo, precio, img}) => {
    return(
        <>
            <div className="card m-1" style="width: 12rem;">
                <img src={img} className="card-img-top" alt="imagen"/>  
                <div className="card-body">
                    <h5 className="card-title">{tipo}</h5>
                    <p className="card-text">$ {precio}</p>
                    <button className="btn">
                    <i className="fa-solid fa-cart-plus">Ver detalle del producto</i>
                    </button>  
                </div>
            </div>
        </>
    );
}
export default Item;
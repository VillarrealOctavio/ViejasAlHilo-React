import Item from "./Item";

const ItemList = ({productos}) => {
    return (
            <div className="d-flex flex-wrap justify-content-around">
               { 
                        productos.length > 0
                        ? productos.map(el => 
                        <Item 
                        key={el.id} 
                        tipo={el.tipo} 
                        precio={el.precio} 
                        img={el.imagen}
                        clase={el.clase}/>)
                        :<p>Aguarde un momento...</p>
                       
                }
            </div>
    );
};

export default ItemList;
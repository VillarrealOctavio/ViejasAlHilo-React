import Item from "./Item";

const mapear = (array)=>{
    array.map(el=>
        <Item 
        key={el.id} 
        tipo={el.tipo} 
        precio={el.precio} 
        img={el.imagen[0]}/>)
}

const ItemList = ({productos}) => {
    return (
            <div>
               { 
                        // productos.length > 0
                        // ? productos.map(el => 
                        // <Item 
                        // key={el.id} 
                        // tipo={el.tipo} 
                        // precio={el.precio} 
                        // img={el.imagen[0]}/>)
                        // :<p>Aguarde un momento...</p>

                        productos.length > 0 ?
                        mapear(productos) :
                        <p>Aguarde un momento...</p>
                }
            </div>
    );
};

export default ItemList;
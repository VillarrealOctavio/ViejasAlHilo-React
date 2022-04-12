import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import stockBolsos from "./products";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})

    useEffect(()=>{
        customFetch(2000, stockBolsos[2])
            .then(data => setDato(data))
            .catch(error => console.log(error))
    },[])
    
    return(
        <>
            <ItemDetail item={dato}/>
        </>
    );
}

export default ItemDetailContainer;
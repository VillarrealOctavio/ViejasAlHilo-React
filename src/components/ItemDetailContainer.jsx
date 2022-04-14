import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import stockBolsos from "./products";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const {idItem} =useParams()

    useEffect(()=>{
            customFetch(2000, stockBolsos.find(el => el.tipo == idItem))
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
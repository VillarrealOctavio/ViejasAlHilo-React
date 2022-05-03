import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import MediaCard from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
     
        useEffect(() => {
            const fetchFromFireStore = async () => {
                const querySnapshot = await getDocs(collection(db, "products"));
                const dataFromFireStore = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                return dataFromFireStore
            }
            fetchFromFireStore()
                .then(result => setDatos(result))
                .catch(err => console.log(err))
    }, [datos]);
    
    return(
            <>
                <List>
                    <ListItem className='d-flex flex-column'>
                        <ListItemText primary="Viejas al Hilo"/>
                        <ItemList productos={datos}/>
                    </ListItem>
                </List>
            </>
        );
    };

export default ItemListContainer;

// https://api.mercadolibre.com/sites/MLA/search?q=mate    (API DE MELI)
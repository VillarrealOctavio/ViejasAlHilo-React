import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import App from './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './components/CartContext';

function app() {
  return (
    <>
    <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
              <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
            </Routes>
          </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default app;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import App from './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

function app() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default app;


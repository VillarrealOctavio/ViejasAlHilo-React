import CartWidget from "./CartWidget";
import imgLogo from "../logoHorizontalCopia.png"
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm'
 
const NavBar = () => {
    return( 
        <>
            <div className="row bgMostazaBlanco mx-1 bordeRedondo">
                    <div class="col-md-4">
                        <Link to='/'>  
                            <img className="imgLogo m-1" src={imgLogo} alt="Logo"></img>
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <ul className="nav nav-pills nav-fill d-flex align-items-center">
                        <Link to='/category/estampado'>
                            <li className="nav-item">                            
                                <a className="nav-link text-white fontTitulo" href="#">Estampados</a>                           
                            </li>
                        </Link>
                        <Link to='/category/personalizado'>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white fontTitulo" href="pages/productos.html" role="button" aria-expanded="false">Personalizados</a>
                                <div className="dropdown-menu">
                                <a className="dropdown-item text-dark" id="botonMates" href="#">Estampados</a>
                                <a className="dropdown-item text-dark" id="botonBolsos" href="#">Personalizados</a>
                                <a className="dropdown-item text-dark" id="botonEstuches" href="#">Lisos</a>
                                <a className="dropdown-item text-dark" id="botonLatas" href="#">Camuflados</a>
                                </div>
                            </li>
                        </Link>
                        <Link to='category/liso'>
                            <li className="nav-item">
                            <a className="nav-link text-white fontTitulo" href="pages/nosotras.html">Lisos</a>
                            </li>
                        </Link>  
                        <Link to='category/camuflado'>  
                            <li className="nav-item">
                            <a className="nav-link text-white fontTitulo" href="pages/nosotras.html">Camuflados</a>
                            </li>
                        </Link>
                        </ul>
                        <SearchForm/>
                    </div>
                    <div className="col-md-1">
                        <CartWidget />
                    </div>
            </div>
        </>
    )
};
export default NavBar;
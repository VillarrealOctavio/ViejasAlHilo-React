import CartWidget from "./CartWidget";
import App from "../App.css";
import imgLogo from "../logoHorizontalCopia.png"

const NavBar = () => {
    return( 
        <>
            <div className="row bgMostazaBlanco mx-1 bordeRedondo">
                    <div class="col-md-4">
                        <img className="imgLogo m-1" src={imgLogo} alt="Logo"></img>
                    </div>
                    <div className="col-md-7">
                        <ul className="nav nav-pills nav-fill d-flex align-items-center">
                            <li className="nav-item">
                            <a className="nav-link text-white fontTitulo" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white fontTitulo" href="pages/productos.html" role="button" aria-expanded="false">Productos</a>
                                <div className="dropdown-menu">
                                <a className="dropdown-item text-dark" id="botonMates" href="#">Mates</a>
                                <a className="dropdown-item text-dark" id="botonBolsos" href="#">Bolsos</a>
                                <a className="dropdown-item text-dark" id="botonEstuches" href="#">Estuches</a>
                                <a className="dropdown-item text-dark" id="botonLatas" href="#">Latas</a>
                                </div>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white fontTitulo" href="pages/nosotras.html">Nosotras</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1">
                        <CartWidget />
                    </div>
            </div>
        </>
    )
};
export default NavBar;
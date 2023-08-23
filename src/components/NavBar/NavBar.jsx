
import shoppingCart from '../../assets/shopping-cart_115264.svg'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


export const NavBar = () => {

    return (
        <header className="header">
            <div className="header_container">
                <h1 className='header_logo'>VOLTIO</h1>
                <img src="" alt="" />
                
                <nav className='navbar'>
                    <Link className="navbar_link" to="/">Inicio</Link>
                    <Link className="navbar_link" to="/ItemListContainer">Productos</Link>
                    <Link className="navbar_link" to="/productos/plafones">Plafones</Link>
                    <Link className="navbar_link" to="/productos/lampara pie">Lampara pie</Link>
                    <Link className="navbar_link" to="/productos/aplique">Apliques</Link>
                    <Link className="navbar_link" to="/productos/colgante">Colgantes</Link>
                    <Link className="navbar_link" to="/Contacto">Contacto</Link>
                </nav>  
                <CartWidget/>
             </div>
        </header>
    )
}


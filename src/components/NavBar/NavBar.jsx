
import shoppingCart from '../../assets/shopping-cart_115264.svg'
import {Link} from 'react-router-dom'


export const NavBar = () => {

    return (
        <header className="header">
            <div className="header_container">
                <h1 className='header_logo'>VOLTIO</h1>
                <img src="" alt="" />
                
                <nav className='navbar'>
                    <Link className="navbar_link" to="/">Inicio</Link>
                    <Link className="navbar_link" to="/Servicios">Servicios</Link>
                    <Link className="navbar_link" to="/productos/carniceria">carniceria</Link>
                    <Link className="navbar_link" to="/productos/verduleria">verduelria</Link>
                    <Link className="navbar_link" to="/productos/panaderia">panaderia</Link>
                    <Link className="navbar_link" to="/Contacto">Contacto</Link>
                </nav>  
                <div className='div_cart'>
                     <img className='cart' src={shoppingCart} alt="" />
                     <p className='numerito'>1</p>
                </div>
 
             </div>
        </header>
    )
}


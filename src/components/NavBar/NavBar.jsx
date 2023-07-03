
import shoppingCart from '../../assets/shopping-cart_115264.svg'


export const NavBar = () => {

    return (
        <header className="header">
            <div className="header_container">
                <h1 className='header_logo'>VOLTIO</h1>
                <img src="" alt="" />
                
                <nav className='navbar'>
                    <a className="navbar_link" href="#">Inicio</a>
                    <a className="navbar_link" href="#">Servicios</a>
                    <a className="navbar_link" href="#">Productos</a>
                    <a className="navbar_link" href="#">Contacto</a>
                </nav>  
                <div className='div_cart'>
                     <img className='cart' src={shoppingCart} alt="" />
                     <p className='numerito'>1</p>
                </div>
 
             </div>
        </header>
    )
}


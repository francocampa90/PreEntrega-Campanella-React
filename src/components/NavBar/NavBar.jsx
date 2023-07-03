
import shoppingCart from '../../assets/shopping-cart_115264.svg'



export const NavBar = () => { 

    return (
        <NavBar className="NavBar">
            <div className="NavBar_container">
                <h1 className='NavBar_logo'>VOLTIO</h1>
                <img src="" alt="" />
                
                <nav className='navbar'>
                    <a className="navbar_link" href="#">Inicio</a>
                    <a className="navbar_link" href="#">Servicios</a>
                    <a className="navbar_link" href="#">Empresa</a>
                    <a className="navbar_link" href="#">Proyectos</a>
                    <a className="navbar_link" href="#">Contacto</a>
                </nav>  
                <div className='div-cart'>
                    <img className='cart' src={shoppingCart} alt="" />
                    <p className='numerito'>1</p>
                </div>
 
             </div>
        </NavBar>
    )
}


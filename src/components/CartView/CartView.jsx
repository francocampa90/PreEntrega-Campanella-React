import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Swal from "sweetalert2"





const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Se vacio tu carrito',
            showConfirmButton: false,
            timer: 1500
            })

        return (
            <div className="container my-5">

                
                <h2 className="text-4xl">Tu carrito está vacío </h2>
                <hr/>
                <Link to="/ItemListContainer" className="bg-blue-500 px-4 py-1 rounded text-white">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-4xl">Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div className="container-custom" key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre}/>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerDelCarrito(item.id)}><FaTrashAlt/></button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h4 className="text-3xl my-2">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="bg-red-600 px-3 py-1 rounded text-white">Vaciar carrito</button>
                <Link className="bg-blue-600 px-4 py-1  rounded text-white" to="/Checkout">Terminar mi compra</Link>
            </div>            
        </div>
    )
}

export default CartView
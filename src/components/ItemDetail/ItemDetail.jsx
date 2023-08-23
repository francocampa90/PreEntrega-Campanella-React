import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
             ...item,
            cantidad
        }

        agregarAlCarrito(newItem)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego un producto a tu carrito',
            showConfirmButton: false,
            timer: 1500
            })
    }
    
    return (

        <div className="catalogo__contenedor container-custom h-300">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>precio: ${item.precio}</p>
            <p className='mt-1 text-g font-medium text-green-700'>Stock {item.stock}</p> 
            


            {
                
                isInCart(item.id)
                    ? <Link className="bg-blue-600 px-4 py-1  rounded text-white" to="/ItemListContainer">Seguir Comprando</Link>
                    : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
                

            }

        </div>
    )
}

export default ItemDetail
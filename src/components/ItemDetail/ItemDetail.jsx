import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }
    
    return (

        <div className="catalogo__contenedor container-custom h-300">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>precio: ${item.precio}</p>
            <p className='mt-1 text-g font-medium text-green-700'>Stock {item.stock}</p> 
            {/*<button className='bg-blue-500 px-4 py-1 rounded text-white'>comprar</button>*/}


            {
                isInCart(item.id)
                    ? <Link className="bg-blue-500 px-4 py-1 rounded text-white" to="/cart">Terminar mi compra</Link>
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
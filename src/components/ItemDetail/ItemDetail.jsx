import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({item}) => {

    const[cantidad, setCantidad] = useState(1)

    const handleAgregar =() => {
        cantidad: counter
    }

    return (

        <div className="catalogo__contenedor h-300">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>precio: ${item.precio}</p>
            <p className='mt-1 text-g font-medium text-green-700'>Stock {item.stock}</p> 
            {/*<button className='bg-blue-500 px-4 py-1 rounded text-white'>comprar</button>*/}
            <ItemCount
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                agregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail
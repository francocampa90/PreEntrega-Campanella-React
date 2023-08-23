import { Link } from "react-router-dom"


const ItemCount =({max, cantidad, setCantidad, agregar}) =>{
    
    

    const handleRestar =() => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar =() => {
        cantidad < max && setCantidad(cantidad + 1)
       
    }

  

    return(
        <div className="item-count">
            <button onClick={handleRestar} 
               className= {`px-3 py-1 rounded ${cantidad ===1 ? "bg-blue-300 px-3 text-black" : "bg-blue-600 px-3 text-white" } `}
               disabled={cantidad === 1}>-</button>

            <span>{cantidad}</span>

            <button onClick={handleSumar}
            className= {`px-3 py-1 rounded ${cantidad === max ? "bg-blue-300 px-3 text-black" : "bg-blue-600 px-3 text-white" } `}
            disabled={cantidad === max}>+</button>
            <br/>
            <button className="bg-blue-600 px-3 py-1 rounded text-white" onClick={agregar}>Agregar</button>
            <Link className="bg-blue-500 px-4 py-1 rounded text-white" to="/cart">Terminar mi compra</Link>
        </div>
    )
} 

export default ItemCount 
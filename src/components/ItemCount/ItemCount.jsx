

const ItemCount =({max, cantidad, setCantidad, agregar}) =>{
    
    

    const handleRestar =() => {
        cantidad > 1 && setCounter(cantidad - 1)
    }

    const handleSumar =() => {
        cantidad < max && setCounter(csntidad + 1)
    }

    

    return(
        <div className="item-count">
            <button className="button-1" onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button className="button-1" onClick={handleSumar}>+</button>
            <br/>
            <button className="button-2" onClick={agregar}>Agregar</button>
        </div>
    )
} 

export default ItemCount 
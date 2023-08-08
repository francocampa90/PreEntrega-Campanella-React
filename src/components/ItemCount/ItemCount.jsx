

const ItemCount =({max, counter, setCounter, agregar}) =>{
    
    const [counter, setCounter] = useState(1)


    const handleRestar =() => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar =() => {
        counter < max && setCounter(counter + 1)
    }

    

    return(
        <div className="item-count">
            <button className="button-1" onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button className="button-1" onClick={handleSumar}>+</button>
            <br/>
            <button className="button-2" onClick={agregar}>Agregar</button>
        </div>
    )
} 

export default ItemCount 
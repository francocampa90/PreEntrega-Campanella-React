

const ItemCard = ({item}) => {
    return(
        <div key={item.id} className='col-3 m-2'>
                            <h4>{item.nombre}</h4>
                            <img src={item.img} alt={item.nombre} />
                            <p>{item.descripcion}</p>
                            <p>precio: ${item.precio}</p>
                            <p className='mt-1 text-g font-medium text-green-700'>Stock {item.stock}</p>
                            <button className='bg-blue-500 px-4 py-1 rounded text-white'>comprar</button> 
                        </div> 
    )
}

export default ItemCard
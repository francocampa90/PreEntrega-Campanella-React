import { Link } from "react-router-dom"


const ItemCard = ({item}) => {
    
    return(
        <div className='col-3 m-2 container-custom'>
                            <h4>{item.nombre}</h4>
                            <img src={item.img} alt={item.nombre} />
                            <p>precio: ${item.precio}</p>

                            {
                                item.stock < 10 && <p className="text-red-500"> Quedan solo {item.stock} unidades!</p>
                            }
                            {
                                item.stock >= 10 && <p className="text-green-500"> Stock  {item.stock} unidades!</p>
                            }


                            <Link to={`/detail/${item.id}`} className='bg-blue-500 px-4 py-1 rounded text-white'>Ver más</Link>
                        </div> 
    )
}

export default ItemCard
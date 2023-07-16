import { useEffect, useState } from 'react'
//import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])

    useEffect(() => {
        pedirDatos ()
        .then((res) => {
                setProductos(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    

    return (
        <div>
            <ItemList productos = {productos}/>
        </div>      
    )
}

export default ItemListContainer



















// const ItemListContainer = ({servicios}) => {
//     return(
//         <div className='servicios_container'>
//             <h2>HOGAR</h2>
//             <p>{servicios}</p>
//         </div>
        
//     )
// }

// export default ItemListContainer
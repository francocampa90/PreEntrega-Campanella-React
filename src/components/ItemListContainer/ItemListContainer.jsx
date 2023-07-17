import { useEffect, useState } from 'react'
//import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'



const ItemListContainer = () => {
 
    const {productos, loading } = useProductos()
    console.log(loading, productos)
    
    return (
        <div>
            {
                loading
                ? <h2>cargando..</h2>
                : <ItemList productos = {productos}/>
            }
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
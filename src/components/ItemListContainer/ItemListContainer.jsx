import { useEffect, useState } from 'react'

import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', "==", categoryId) )
                    : productosRef
       
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])


    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <ItemList productos={productos}/>
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
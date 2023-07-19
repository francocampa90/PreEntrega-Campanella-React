import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    // console.log(itemId)
    // console.log(item)

    useEffect(() => {
            setLoading(true)
        
            pedirDatos ()
                .then(r => {
                    setItem(r.find(prod => prod.id === Number(itemId) ))
                })
                .finally(() => setLoading(false))
        }, []) 
    

    return(
        <div className="catalogo__contenedor">
            {
                loading
                    ? <h2>cargando ... 2</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
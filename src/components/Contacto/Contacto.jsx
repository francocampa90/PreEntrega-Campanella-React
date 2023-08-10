import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"


const Contacto = () => {

    const contexto = useContext(CartContext)

    console.log(contexto)
   

    return (
        <div>
            <h2>Contacto</h2>
            <hr/>
        </div>
    )
}

export default Contacto
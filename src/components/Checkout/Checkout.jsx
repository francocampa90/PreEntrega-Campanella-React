import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import Swal from "sweetalert2"



const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const productosRef = collection(db, "productos")
    const [orderId, setOrderId] = useState(null)
    
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden)  //  orden a firebase

        orden.items.forEach(item => {
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
                .then((doc) => {
                    const stock = doc.data().stock

                    if (stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock de " + item.nombre)
                    }
                })

        })

        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden)
            .then((doc) => {
                console.log(doc.id)
                vaciarCarrito()
                setOrderId(doc.id)
            })
    }

    if (orderId) {

        Swal.fire({
            title: "Tu compra se registró exitosamente!",
            icon: 'success',
        })

        return (
            <div className="my-5">
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link className="bg-blue-600 px-4 py-1  rounded text-white" to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }

    return (
        <div className="my-5">
           
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre"
                    name="nombre"
                />

                <input 
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Dirección"
                    name="direccion"
                />

                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Email"
                    name="email"
                />

                <button className="bg-blue-600 px-4 py-1  rounded text-white">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout
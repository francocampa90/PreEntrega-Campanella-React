import { NavBar } from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Contacto from "./components/Contacto/Contacto"
import Servicios from "./components/Servicios/Servicios"
import Inicio from "./components/Inicio/Inicio"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import CartView from "./components/CartView/CartView"

import './styles/styles.scss'



function App() {


  return ( 
      <CartProvider>
        <BrowserRouter>
        
            <NavBar />

            <Routes>
              <Route path = "/" element={<Inicio/>}/>
              <Route path = "/ItemListContainer" element={<ItemListContainer/>}/> {/*Productos*/}
              <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
              <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
              <Route path = "/Contacto" element={<Contacto/>}/>
              <Route path = "/Servicios" element={<Servicios/>}/>
              <Route path="/cart" element={<CartView /> }/>
              <Route path="*" element={ <Navigate to="/"/> }/>
                
            </Routes>

        
        </BrowserRouter>
      </CartProvider>
  )
}

export default App

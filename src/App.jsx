import { NavBar } from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Contacto from "./components/Contacto/Contacto"
import Servicios from "./components/Servicios/Servicios"
import Inicio from "./components/Inicio/Inicio"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import { CartWidget } from "./components/CartWidget/CartWidget"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import './styles/styles.scss'


function App() {

  return (

    <BrowserRouter>
     
        <NavBar />

        <Routes>
          <Route path = "/" element={<Inicio/>}/> 
          <Route path = "/ItemListContainer" element={<ItemListContainer/>}/> {/*Productos*/}
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>


          <Route path = "/Contacto" element={<Contacto/>}/>
          <Route path = "/Servicios" element={<Servicios/>}/>
          <Route path="*" element={ <Navigate to="/"/> }/>
            
        </Routes>


        {/*<CartWidget/>*/}
        
     
    </BrowserRouter>
  )
}

export default App

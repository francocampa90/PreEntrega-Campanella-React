import { NavBar } from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { CartWidget } from "./components/CartWidget/CartWidget"
import { BrowserRouter } from "react-router-dom"

import './styles/styles.scss'


function App() {

  return (

    <BrowserRouter>
     
        <NavBar />
        {/*<ItemListContainer servicios={"Contamos con la mayor variedad en productos de iluminación. Calidad y entrega garantizadas."}/>*/}
        {/*<CartWidget/>*/}
        <ItemListContainer/>
     
    </BrowserRouter>
  )
}

export default App

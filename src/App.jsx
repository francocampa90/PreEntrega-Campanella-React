import { NavBar } from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { CartWidget } from "./components/CartWidget/CartWidget"

import './styles/styles.scss'


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer servicios={"Contamos con la mayor variedad en productos de iluminación. Calidad y entrega garantizadas."}/>
      <CartWidget/>
    </div>
  )
}

export default App

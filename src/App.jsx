import { NavBar } from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { CartWidget } from "./components/CartWidget/CartWidget"

import './styles/styles.scss'


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer servicios={"Instalaciones Electricas, Mantenciones Eléctricas, Iluminacion"}/>
      <CartWidget/>

    </div>
  )
}

export default App

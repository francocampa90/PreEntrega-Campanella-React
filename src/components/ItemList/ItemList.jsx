import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({productos}) =>{

    return(

        <div className='catalogo__contenedor'>
            <h2>Productos</h2>
            <hr />
            <div className='row'>
                {
                    productos.map((prod) => <ItemCard item={prod}/>)   
                }
            </div>
        </div> 


    )
}

export default ItemList

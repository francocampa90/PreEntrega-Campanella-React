import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({productos}) =>{

    return(

        <div className='catalogo__contenedor'>
            <h2>Productos</h2>
            <hr />
            <div className='flex flex-row flex-wrap'>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)  
            }
            </div>
        </div> 


    )
}

export default ItemList

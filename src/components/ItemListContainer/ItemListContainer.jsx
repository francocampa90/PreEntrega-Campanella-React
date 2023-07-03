//import './ItemListContainer.scss'


const ItemListContainer = ({servicios}) => {
    return(
        <div className='servicios_container'>
            <h2>SERVICIOS ELECTRICOS Y DE ILUMINACION</h2>
            <hr />
            <p>{servicios}</p>
        </div>
        
    )
}

export default ItemListContainer
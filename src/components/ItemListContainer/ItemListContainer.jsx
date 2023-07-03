//import './ItemListContainer.scss'


const ItemListContainer = ({servicios}) => {
    return(
        <div className='servicios_container'>
            <h2>HOGAR</h2>
            <p>{servicios}</p>
        </div>
        
    )
}

export default ItemListContainer
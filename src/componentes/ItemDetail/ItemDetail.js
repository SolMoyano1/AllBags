
import ItemDetailContainer from '../ContainerItemDetail/ContainerItemDetail';

const ItemDetail = ({data}) => {
    
    return(
        <ItemDetailContainer> 
            
             <div>

                <h3>{tipo}+{nombre}</h3>
                <p >$ {precio}</p>

                <p>Medidas</p>
                <p>{medidas}</p>

                <p>COLOR</p>
                <p>{color}</p>

                <p>DETALLE</p>
                <p>{descripcion}</p>
                <Button>Agregar al Carrito</Button>

            </div>

        </ItemDetailContainer>
    )
}

export default ItemDetail
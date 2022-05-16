import React, {useContext } from 'react'

//context
import CartContext from '../../context/CartContext';




function TarjetaCarrito({caracteristicas, action}){
  
    const {foto, tipo, nombre, precio, descripcion, medidas, id}= caracteristicas;
    
    const {agregarProductos, borrarProductos} = useContext(CartContext);



    /*const agregarAlCarrito = (e) => {
        e.stopPropagation();
        console.log("Producto agregado:", tipo, nombre, id);
        //agregarTarjetaAritculo(caracteristicas);
    }*/


    return(
        <div className='divTarjetas'>

            <p>{tipo} {nombre}</p>
                
            <img src={`./${foto}`} alt={foto} className="fotos" /> 

            <div>
               <p>Precio: ${precio}</p> 
               <p>Medidas: {medidas}</p>
               <p>Descripcion: {descripcion}</p>
            </div>

            <div>
                <button onClick={() => agregarProductos(caracteristicas)}> Agregar </button>
                <button onClick={() => borrarProductos(caracteristicas)}> Quitar </button>
            </div>

            <div>
                {caracteristicas.amount}
                <p>Total: ${caracteristicas.amount} * {precio}</p>
            </div>
                
            

        </div>
    )
    
}

export default TarjetaCarrito;


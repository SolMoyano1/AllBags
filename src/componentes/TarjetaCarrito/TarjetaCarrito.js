import './TarjetaCarrito.css'
import React, {useContext } from 'react'

//context
import CartContext from '../../context/CartContext';




function TarjetaCarrito({caracteristicas, action}){
  
    const {foto, tipo, nombre, precio, descripcion, medidas, id}= caracteristicas;
    
    const {agregarProductos, borrarProductos, cartItems} = useContext(CartContext);

    return(
        
        <div className='divPadre'>
            
            <div className='tarjetasGrid'>
                
                <div className='margenFotosCarrito'>
                  <p>{tipo} {nombre}</p>
                  <img src={`./${foto}`} alt={foto} className="fotosCarrito" /> 
                </div>
                
                <div className='divGrid2'>
                    <div className='margenInfoCarrito'>
                        <p>Medidas: {medidas}</p>
                        <p>Descripcion: {descripcion}</p>
                        <p>Precio: ${precio}</p>
                        <p>Unidades agregadas: {caracteristicas.amount}</p>
                        
                        <button onClick={() => agregarProductos(caracteristicas)} className="botonQuitarAgregar"> Agregar </button>
                        <button onClick={() => borrarProductos(caracteristicas)} className="botonQuitarAgregar"> Quitar </button>
                       
                    </div> 
                </div>
                
            </div>
        </div>
    )
    
}

export default TarjetaCarrito;
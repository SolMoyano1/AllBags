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
                
                <div className='divGrid1'>
                  <p>{tipo} {nombre}</p>
                  <img src={`./${foto}`} alt={foto} className="fotosCarrito" /> 
                </div>
                
                <div className='divGrid2'>
                    <div className='margenInfoCarrito'>

                        <div className='gridCaracts'>
                            <p className='nombreCaracts'>Medidas:</p>
                            <p className='medidas'> {medidas}</p>
                        </div>
                         
                        <div className='gridCaracts'>
                            <p className='nombreCaracts'>Descripcion: </p>
                            <p className='descripcion'>{descripcion}</p>
                        </div>
                         
                        <div className='gridCaracts'>
                            <p className='nombreCaracts'>Precio:</p>
                            <p className='precio'>${precio}</p>
                        </div>

                        <div className='gridCaracts'>
                           <p className='nombreCaracts'>Agregadas: </p>
                           <p className='agregadas'>{caracteristicas.amount}</p>
                        </div>
                        
                         
                        <div className='gridCelu'>
                            <button onClick={() => agregarProductos(caracteristicas)} className="botonQuitarAgregar"> Agregar </button>
                            <button onClick={() => borrarProductos(caracteristicas)} className="botonQuitarAgregar"> Quitar </button>
                        </div>

                    </div> 
                </div>
                
            </div>
        </div>
    )
    
}

export default TarjetaCarrito;
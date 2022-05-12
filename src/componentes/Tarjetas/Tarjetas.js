import './Tarjetas.css'
import React,{ useState, useEffect, useContext } from 'react'
//context
import CartContext from '../../context/CartContext';




function TarjetasDeArticulos ({caracteristicas, action}){
    
    const { tarjetaArticulo, agregarTarjetaAritculo } = useContext(CartContext);

    const {foto, tipo, nombre, precio, id}= caracteristicas;
    

    /*const agregarAlCarrito = (e) => {
        e.stopPropagation();
        console.log("Producto agregado:", tipo, nombre, id);
        //agregarTarjetaAritculo(caracteristicas);
    }*/
    
    const {agregarProductos} = useContext (CartContext)

    return(
        <div className='divTarjetas'>

            <p className='caracts'>{tipo} {nombre}</p>
                
            <img src={`./${foto}`} alt={foto} className="fotos" /> 
                
            <p className='caracts'>Precio: ${precio}</p>

        </div>
    )
}

export default TarjetasDeArticulos;


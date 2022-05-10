import './Tarjetas.css'
import AgregarItems from '../AgregarItems/AgregarItems'
import React,{ useState, useEffect, useContext } from 'react'
//context
import CartContext from '../../context/CartContext';




function tarjetasDeArticulos ({caracteristicas, action}){
    
    const { tarjetaArticulo, agregarTarjetaAritculo } = useContext(CartContext);

    const {foto, tipo, nombre, precio, id}= caracteristicas;
    

    const agregarAlCarrito = (e) => {
        e.stopPropagation();
        console.log("Productos agregados:", tarjetaArticulo);
        agregarTarjetaAritculo(caracteristicas);
    }

    return(
        <div>

            <aside >
                <p className='caracts'>{tipo} {nombre}</p>
                 
                <img src={`./${foto}`} alt={foto} className="fotos" /> 
                 
                <p className='caracts'>Precio: ${precio}</p>

                <button onClick={agregarAlCarrito}> <AgregarItems /></button>

            </aside>

        </div>
    )
}

export default tarjetasDeArticulos;


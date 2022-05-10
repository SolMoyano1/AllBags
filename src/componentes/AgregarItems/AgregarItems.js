import './AgregarItems.css';
import React, {useState,useEffect} from "react"


const AgregarItems = () =>{
    
    const [count, setCount]= useState (0);

    let agregar= ()=>{
        setCount(count + 1);
    }

    /*let quitar= ()=>{
        setCount(count - 1);
    }
    */
   
    return(
        <div className='divAgregarAlCarrito'>
            <button onClick={agregar} className="botonAgregarAlCarrito"> Agregar al carrito </button>
        </div>
    )
    
}

export default AgregarItems;
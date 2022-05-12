import './AgregarItems.css';
import React, {useState,useEffect} from "react"


const AgregarItems = () =>{
    
    const [count, setCount]= React.useState (0);

    let agregar= ()=>{
        setCount(count + 1);
    }

    /*let quitar= ()=>{
        setCount(count - 1);
    }
    */
   
    return(
        <div className='divAgregarAlCarrito'>
            <aside onClick={agregar} className="botonAgregarAlCarrito"> Agregar al carrito </aside>
        </div>
    )
    
}

export default AgregarItems;
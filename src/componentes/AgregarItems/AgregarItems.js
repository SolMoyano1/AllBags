import React, {useState,useEffect} from "react"


const AgregarItems = () =>{
    
    const [count, setCount]= useState (0);

    let agregar= ()=>{
        setCount(count + 1);
    }

    let quitar= ()=>{
        setCount(count - 1);
    }

    <div>
        <button onClick={agregar}> + </button>
        
        <button onClick={quitar}> - </button>
    </div>
}

export default AgregarItems;
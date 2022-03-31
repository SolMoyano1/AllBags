import React, {useState,useEffect} from "react"

export default function agregarItems (){
    
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
import './paginas.css';
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { ListItem } from '@mui/material';

function Carrito ( producto){

    const {agregarProductos, borrarProductos} = useContext(CartContext);

    const {id} = producto;
    
    
    return(
        <div className='margen'>
            
            <img src={`./${producto.foto}`} alt={producto.foto} /> 
             <p> prod: {producto.tipo} {producto.nombre}</p>
            
            <div>
                
                <p key={producto.precio}>Precio: ${producto.precio}</p>
                
                <p>nombre{producto.tipo} {producto.nombre}</p>
                
                <div>
                    <button onClick={() => agregarProductos(producto)}> Agregar </button>
                    <button onClick={() => borrarProductos(producto)}> Quitar </button>
                </div>

                <div>
                    {producto.amount}
                    <p>Total: ${producto.amount * producto.precio}</p>
                </div>
                       
            </div>
            
        </div>
    )
    
    /*<img src={foto} alt={caracteristicas.tipo}/>
            
            <p>{tipo} {nombre}</p>

            <div>
                <button> Agregar </button>
                <button> Quitar </button>
            </div>
            
            
            <div>
                {caracteristicas.amount}
                <p>Total: ${caracteristicas.amount * caracteristicas.precio}</p>
            </div>*/





}

export default Carrito;
/*const Carrito =({producto}) =>{

    
    
    const { agregarProductos, borrarProductos, cartItems } = useContext(CartContext);
    
    const { id }= producto;
    
    // obtener la cantidad de productos que tenemos en el carrito
    const [cantProductos, setCantProductos] = useState(0);

    
    // Obtener el precio total
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    

    return (

        <div className='margen'>

            <h1>Tu carrito</h1>
            
            {cartItems.length === 0 ? (
                <p>Tu carrito esta vacio</p>
                
            ) : (

            <div>
                {cartItems.map((item, i) => (
                    <div key={i} item={item}>
                        <h2>CHau:</h2>
                        
                        
                    </div> 
                ))}
                
            </div>
            
            )}
            <h2>Cantidad de productos: {cantProductos}</h2>
            
            <h2>Total: ${total}</h2>

        </div>
    )
   

}

export default Carrito;
*/
import './paginas.css';
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { ListItem } from '@mui/material';
import TarjetaCarrito from '../componentes/TarjetaCarrito/TarjetaCarrito';

function Carrito (producto){

    const {agregarProductos, borrarProductos} = useContext(CartContext);

    const {id, nombre} = producto;

    const { cartItems } = useContext(CartContext);
    
    

    return(

        <div className='margen'>

            {cartItems.map((producto, index)=>{
                const {id} = producto
               
                return(
                    <div key={index}>
                        <TarjetaCarrito caracteristicas={producto} key={id}/>
                    </div>
                )
            })}
        </div>
    )




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
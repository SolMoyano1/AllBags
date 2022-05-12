
import { useState, useEffect,useContext } from "react";
import CartContext from "../context/CartContext";



const Carrito =() =>{

    const { cartItems } = useContext(CartContext);
    // ver si el carrito esta abierto o no 
    const [cartOpen, setCartOpen] = useState(false);
    // obtener la cantidad de productos que tenemos en el carrito
    const [cantProductos, setCantProductos] = useState(0);


    //actualizar la cantidad de productos
    useEffect(() => {
        setCantProductos(
            cartItems?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);
    
    // Obtener el precio total
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );

    return (
        <div className='margen'>
            
            {cartItems && cartOpen && (
                <div>

                </div>
            )}

            <h1>Tu carrito</h1>
            
            {cartItems.length === 0 ? (
                <p>Tu carrito esta vacio</p>
                
            ) : (
            <div>
                {cartItems.map((item, i) => (
                    <div key={i} item={item} />
                ))}
                
            </div>
            
            )}
            <h2>Cantidad de productos: {cantProductos}</h2>
            
            <h2>Total: ${total}</h2>

        </div>
    )
   

}

export default Carrito;
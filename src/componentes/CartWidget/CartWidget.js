import Carrito from "../Multimedia/carrito-de-compras.png";
import './CartWidget.css';

//context
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";



const CartWidget=() => {
    
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
    

    
    console.log("cantidad de productos agregados al carrito: ", cantProductos);
/*
    return (
        <div>
            <img className="carritoImg" src={Carrito}></img> 
            
            <p className="nroProductos" >{cartProducts.length}</p>
            
        </div>
        
    )
*/

    return (
        <div>
            
            <img className="carritoImg" src={Carrito}></img>
            
            <div onClick={() => setCartOpen(!cartOpen)}>
                
                <div>
                    
                    {!cartOpen ? (
                        <svg>
                            <img className="carritoImg" src={Carrito}></img>
                        </svg>
                    ) : (
                        <svg>
                            
                        </svg>
                    )}

                </div>
                
                {!cartOpen && (
                    //numero de productos mostrado al lado del carrito
                    <div className="nroProductos">{cantProductos}</div>
                )}
            </div>
            
            

        </div>
      );

}

export default CartWidget;

/*import { ItemCart } from "../ItemCart";

const Cart = () => {


};

export default Cart;*/


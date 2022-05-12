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
    //productsLength setProductsLength

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
            
            {cartItems && cartOpen && (
                <div>

                  <h2>Tu carrito</h2>

                  {cartItems.length === 0 ? (
                      <p>Tu carrito esta vacio</p>
                    ) : (
                        
                        <div>
                            {cartItems.map((item, i) => (
                                <Carrito key={i} item={item} />
                            ))}
                        </div>
                    )}
                    <h2>Total: ${total}</h2>

                </div>
            )}

        </div>
      );

}

export default CartWidget;

/*import { ItemCart } from "../ItemCart";

const Cart = () => {


};

export default Cart;*/


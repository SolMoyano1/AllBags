import Carrito from "../Multimedia/carrito-de-compras.png";
import './CartWidget.css';

import AgregarItems from "../AgregarItems/AgregarItems";

//context
import { useContext } from "react";
import CartContext from "../../context/CartContext";



const CartWidget=() => {

    const {cartProducts} = useContext(CartContext);


    
    console.log("cartProducts: ", cartProducts);

    return (
        <div>
            <img className="carritoImg" src={Carrito}></img> 
            
            <p className="nroProductos" >{cartProducts.length}</p>
            
        </div>
        
    )

}

export default CartWidget;


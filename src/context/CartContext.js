import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
   
    const [cartProducts, setCartProducts] = useState([])
    
    const [precioTotal, setPrecioTotal] = useState(0)

    const añadirAlCarrito = (articulos) => {
       
        let exist = cartProducts.find(cartProduct => cartProduct.id === articulos.id)
        
        if(!exist) { 

            setPrecioTotal(precioTotal + articulos.price)
            setCartProducts(cartProducts => [...cartProducts, articulos])
        }
    }

    const eliminarArticulo = (articulos) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== articulos.id))
    }

    const data = {

        cartProducts,
        añadirAlCarrito,
        precioTotal,
        eliminarArticulo
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
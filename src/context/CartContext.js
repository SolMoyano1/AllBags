/*
import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
   
    const [cartProducts, setCartProducts] = useState([])
    
    const [precioTotal, setPrecioTotal] = useState([])

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

*/

import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState (() =>{

        try{
            const productosENLocalStorage = localStorage.getItem("cartProducts");

            return productosENLocalStorage? JSON.parse (productosENLocalStorage) :[];
            
        }
        catch (error){
            return[];
        }
    });

    useEffect (() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        console.log(cartItems)
    }, [cartItems]);


  //AGREGAR PRODUCTOS
    const agregarProductos = (producto) => {
        const enElCarrito = cartItems.find(
            (productoEnElCarrito) => productoEnElCarrito.id === producto.id
        );

        if (enElCarrito){
            setCartItems.map((productoEnElCarrito) => {
                if (productoEnElCarrito.id === producto.id){
                    return { ...enElCarrito, amount: enElCarrito.amount + 1}
                }
                else{
                    return productoEnElCarrito;
                }
            })
        }
        else{
            setCartItems ([...cartItems, {...producto, amount : 1}])
        }
    }
 //BORRAR PRODUCTOS

    const borrarProductos = (producto) => {
        const enElCarrito = cartItems.find(
            (productoEnElCarrito) => productoEnElCarrito.id === producto.id
        );

        if (enElCarrito.amount === 1){
            setCartItems(
                cartItems.filter((productoEnElCarrito) => productoEnElCarrito.id !== producto.id)
            )  
        }
        else{
            setCartItems ((productoEnElCarrito) => {

                if(productoEnElCarrito.id === producto.id){
                    return {... enElCarrito, amount: enElCarrito.amount - 1}
                }
                else{
                    return productoEnElCarrito;
                }
            })
        };
    }

    return(
           <CartContext.Provider
               value={{cartItems, agregarProductos, borrarProductos}}
           >

               {children}
            </CartContext.Provider> 
    )



}

export { CartProvider };
export default CartContext;
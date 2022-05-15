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
        console.log("Productos agregados:", cartItems)
    }, [cartItems]);


  //AGREGAR PRODUCTOS
    const agregarProductos = (producto) => {
        const enElCarrito = cartItems.find(
            (productoEnElCarrito) => productoEnElCarrito.id === producto.id
        );

        if (enElCarrito){
            setCartItems(
                cartItems.map((productoEnElCarrito) => {
                    if (productoEnElCarrito.id === producto.id){
                        return { ...enElCarrito, amount: enElCarrito.amount + 1}
                    }
                    else{
                        return productoEnElCarrito;
                    }
                })
            )
            
        }
        else{
            setCartItems ([...cartItems, {...producto, amount : 1}])
        }
    }
 //BORRAR PRODUCTOS

    const borrarProductos = (producto) => {
        const enElCarrito = cartItems.find((productoEnElCarrito) => productoEnElCarrito.id === producto.id
        );

        if (enElCarrito.amount === 1){
            setCartItems(
                cartItems.filter((productoEnElCarrito) => productoEnElCarrito.id !== producto.id))  
        }
        else{
            setCartItems (
                cartItems.map((productoEnElCarrito) => {

                if(productoEnElCarrito.id === producto.id){
                    return {... enElCarrito, amount: enElCarrito.amount - 1}
                }
                else{
                    return productoEnElCarrito;
                }
            }))
        };
    }

    return(
           <CartContext.Provider value={{cartItems, agregarProductos, borrarProductos}}>
               {children}
            </CartContext.Provider> 
    )



}

export { CartProvider };
export default CartContext;
import './paginas.css';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../context/CartContext";
import TarjetaCarrito from '../componentes/TarjetaCarrito/TarjetaCarrito';

function Carrito (producto){

    const {agregarProductos, borrarProductos} = useContext(CartContext);

    const {id, nombre} = producto;

    const { cartItems } = useContext(CartContext);
    
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.precio,
        0
    );
    

    return(

        <div className='margen'>

            <h1>Productos en tu carrito:</h1>

            {cartItems.map((producto, index)=>{
                const {id} = producto
               
                return(
                    <div key={index}>
                        <TarjetaCarrito className="tarjCarr" caracteristicas={producto} key={id}/>
                    </div>
                )
            })}
            <div className='divTotal'>
                <p className='total'>TOTAL: {total}</p>
            </div>


            <div className='divTerminarCompra'>
                <button className='btnSiguiente'>
                    <Link className='palabraSiguiente' to={'/Formulario'}>Siguiente</Link>
                </button> 
            </div>

        </div>
    )




}

export default Carrito;
/*
    
    const { agregarProductos, borrarProductos, cartItems } = useContext(CartContext);
    
    const { id }= producto;
    
    // obtener la cantidad de productos que tenemos en el carrito
    const [cantProductos, setCantProductos] = useState(0);

    
    // Obtener el precio total
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    

*/
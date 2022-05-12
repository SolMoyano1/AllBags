
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";



const Carrito =() =>{

    const [openModal, setOpenModal] = useState(false)

    const { cartProducts, deleteProduct, precioTotal } = useContext(CartContext);

    const [formulario, setFormulario] = useState({
        nombre: '',
        telefono: '',  
        mail: '',
    });

    const [order, setOrder] = useState(
        {
            comprador : formulario,
            productos: cartProducts.map( (cartProduct)=> {
                return {
                    id: cartProduct.id,
                    titulo: cartProduct.titulo,
                    precio: cartProduct.precio
                }
            }),
            total: precioTotal
        }
    );

    const handleChange = (e) => {
        const {value, nombre} = e.target
        console.log("value: ", value)
        console.log("nombre: ", nombre)

        setFormulario({
            ...formulario,
            [nombre]: value
        })
    }


    
    console.log("cartProducts: ", cartProducts);
    

    return(
        

        <div>
            
            {cartProducts.map( (cartProduct) => {

                const { precio, foto, titulo, nombre, id } = cartProduct

                return(
                <div key={id}>

                    <div>
                        <p>{titulo} {nombre}</p>
                    </div>
                    
                    <div>
                        <img src={`./${foto}`} />
                    </div>

                    <div>
                        <p>$ {precio}</p>
                    </div>

                    <div>
                        <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                            <h3> Borrar </h3>
                        </button>
                    </div>
                </div>
                )

                

            })}
            
            <div className='margen'>


                <button>Continuar comprando</button>
                
                <div>

                    <div>
                        <p>Subtotal</p>
                        <span>$ {precioTotal}</span>
                    </div>
                    
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {precioTotal}</span>
                    </div>
                    
                    <button onClick={() => setOpenModal(true)}>Completar Compra</button>
                </div>
            </div>







        </div>

        

        /*<div className='margen'>
            <h1>Productos en el Carrito</h1>

            {cartProducts? cartProducts.map( (cartProduct) => {
                
                return(

                    <div key={cartProduct.id}>
                        <h1> Hay productos</h1> 
                    </div>
                )
            }): 
            
            <div> 
                <h1> No hay productos</h1> 
            </div>
            
            }
        </div>*/
    
    )

}

export default Carrito;
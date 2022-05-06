import Carrito from "../Multimedia/carrito-de-compras.png";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';


const CartWidget=() => {

    const {cartProducts} = useContext(CartContext);
    console.log("cartProducts: ", cartProducts);
    
    return (
        <div>
            
            <p>{cartProducts.length}</p>
            
            {cartProducts? cartProducts.map( (cartProduct) => {
                
                return(
                        <MenuItem key={cartProduct.id}>
                            
                            <div>
                                <img src={Carrito}></img>
                            </div>

                            <div>
                                <DeleteIcon />
                            </div>

                        </MenuItem>
                    )
            }): <div> <h1> No hay productos</h1> </div>
            
            }
                
                
        </div>
    )

}

export default CartWidget;


import React from "react";
import Button from '@mui/material/Button';
import CartWidget from "../CartWidget/CartWidget";


function NavBar(){

    return(
        <header>
            <div>
                <ul>
                    <button size="small">Mochilas</button>
                    <button size="small">Carteras</button>
                    <button size="small">Riñoneras</button>
                </ul>
            </div>

            <CartWidget/>

        </header>
    )
}

export default NavBar;
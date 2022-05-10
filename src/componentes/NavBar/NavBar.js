import React from "react";

import './NavBar.css';

import CartWidget from "../CartWidget/CartWidget";


function NavBar(props){

    console.log("Hola soy sol")


    return(
        <header className="fondo">
            <div>
                <ul className="barra">

                    <h1 className="titulo"> All Bags</h1>

                    <button className="botones" size="small">Mochilas</button>
                    <button className="botones" size="small">Carteras</button>
                    <button className="botones" size="small">Riñoneras</button>
                    
                    <CartWidget/>
                </ul>
            </div>

        </header>
    )
}

export default NavBar;
import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

import CartWidget from "../CartWidget/CartWidget";


function NavBar(props){


    return(
        <header className="fondo">
            <div>
                
                
                
                <ul className="barra">

                    <h1 className="titulo"> All Bags</h1>

                    <button className="botones" size="small">
                        <Link className="nombresBotones" to={'/Mochilas'}>Mochilas</Link>
                    </button>

                    <button className="botones" size="small">
                        <Link className="nombresBotones" to={'/Carteras'}>Carteras</Link>
                    </button>

                    <button className="botones" size="small">
                        <Link className="nombresBotones" to={'/Rinioneras'}>Riñoneras</Link>
                    </button>

                    <button className="botones" size="small">
                        <Link className="nombresBotones" to={'/Carrito'}><CartWidget/></Link>
                    </button>

                    

                        
                </ul>
            </div>

        </header>
    )
}

export default NavBar;
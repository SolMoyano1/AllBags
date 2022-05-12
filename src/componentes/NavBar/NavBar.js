import React from "react";

import './NavBar.css';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartWidget from "../CartWidget/CartWidget";


function NavBar(props){


    return(
        <header className="fondo">
            <div>
                
                
                
                <ul className="barra">
                    <h1 className="titulo"> All Bags</h1>

                    <button className="botones" size="small">
                        <Link to={'/Mochilas'}>Mochilas</Link>
                    </button>

                    <button className="botones" size="small">
                        <Link to={'/Carteras'}>Carteras</Link>
                    </button>

                    <button className="botones" size="small">
                        <Link to={'/Rinioneras'}>Riñoneras</Link>
                    </button>

                    <Link to={'/Carrito'}></Link>

                        
                </ul>
            </div>

        </header>
    )
}

export default NavBar;
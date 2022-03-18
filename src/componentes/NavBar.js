import React from "react";

import Button from '@mui/material/Button';

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
        </header>
    )
}

export default NavBar;
import './estilos.css';
import Tarjetas from '../Tarjetas/Tarjetas';
import AgregarItems from '../AgregarItems/AgregarItems';
import { useEffect, useState} from 'react';


const ListaCarteras = ({children}) => {

    const [productos, setProductos]= useState([]);

    const arrayCarteras = [

        {foto: 'multimedia/carteraCeliaMarron.jpg',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 8000,
         id: 1,
         color: "Marrón",
         medidas: "35 x 40 x 13 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: 'multimedia/carteraCeliaNegro.jpg',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 8000,
         id: 2,
         color: "Negro",
         medidas: "35 x 40 x 13 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: 'multimedia/carteraMargeBlanco.jpg',
         tipo: "Cartera", 
         nombre: "Marge", 
         precio: 9000,
         id: 3,
         color: "Blanco",
         medidas: "30 x 36 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: 'multimedia/carteraMargeRojo.jpg',
         tipo: "Cartera", 
         nombre: "Marge", 
         precio: 9000,
         id: 4,
         color: "Rojo",
         medidas: "30 x 36 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: 'multimedia/carteraMargeNegro.jpg',
         tipo: "Cartera", 
         nombre: "Marge", 
         precio: 9000,
         id: 5,
         color: "Negro",
         medidas: "30 x 36 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: 'multimedia/carteraMargeMarron.jpg',
         tipo: "Cartera", 
         nombre: "Marge", 
         precio: 9000,
         id: 6,
         color: "Marrón",
         medidas: "30 x 36 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },


    ];


    const verCarteras =  new Promise ((resolve,reject) =>{
        
        setTimeout (() =>{
            resolve (arrayCarteras);
        }, 2000);

    });
    
    useEffect ( () =>{
        verCarteras.then ((res)=>{

            setProductos(res);
        })
    },[])

    console.log("Lista de Carteras:", productos);

    return(
        <div className="grid">

            {productos.map ( (cadaArticulo, index)=> {
                const {id} = cadaArticulo

                return(
                    <div className='cadaTarjeta' key={index}>
                        <Tarjetas caracteristicas={cadaArticulo} key={id}/>
                    </div>
                    
                );
            })};

        </div>
    )

}

export default ListaCarteras;
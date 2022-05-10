import './estilos.css';
import Tarjetas from '../Tarjetas/Tarjetas';
import AgregarItems from '../AgregarItems/AgregarItems';
import { useEffect, useState} from 'react';


const ListaCarteras = ({children}) => {

    const [productos, setProductos]= useState([]);

    const arrayCarteras = [

        {foto: '',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 5500,
         id: 10,
         color: "Marrón",
         medidas: "135 x 46 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: '',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 5500,
         id: 11,
         color: "Negro",
         medidas: "135 x 46 x 11 cm",
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

            <h2> {children} </h2>

            {productos.map ( (cadaArticulo, index)=> {
                const {id} = cadaArticulo

                return(
                    <div key={index}>
                        <Tarjetas caracteristicas={cadaArticulo} key={id}/>
                        <AgregarItems />
                    </div>
                    
                );
            })};

        </div>
    )

}

export default ListaCarteras;
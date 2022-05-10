import './estilos.css';
import { useEffect, useState} from 'react';
//componentes
import Tarjetas from '../Tarjetas/Tarjetas';
import AgregarItems from '../AgregarItems/AgregarItems';



const ListaRinioneras = ({children}) => {

    const [productos, setProductos]= useState([]);

    const arrayRinioneras = [

        {foto: 'multimedia/riñoneraTorkNegro.jpg',
        tipo: "Riñonera", 
        nombre: "Tork", 
        precio: 5900,
        id: 1,
        color: "Negro",
        medidas: "largo de 17 cm. x alto de 11 cm.",
        descripcion: "100% PU | SINTÉTICO. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Tira regulable de eco cuero.",
       
       },

       {foto: 'multimedia/riñoneraFalkaAzul.jpg',
        tipo: "Riñonera", 
        nombre: "Falka", 
        precio: 4300,
        id: 2,
        color: "Azul",
        medidas: "14 cm de alto, x 23 cm de ancho, x 6 cm de profundidad",
        descripcion: "100% POLIESTER. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa con broche plástico regulable",
       },

       {foto: 'multimedia/riñoneraFalkaRojo.jpg',
        tipo: "Riñonera", 
        nombre: "Falka", 
        precio: 4300,
        id: 3,
        color: "Rojo",
        medidas: "14 cm de alto, x 23 cm de ancho, x 6 cm de profundidad",
        descripcion: "100% POLIESTER. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa de eco cuero con broche plástico regulable",
       },

       {foto: 'multimedia/riñoneraFalkaNegro.jpg',
        tipo: "Riñonera", 
        nombre: "Falka", 
        precio: 4300,
        id: 4,
        color: "Negro",
        medidas: "14 cm de alto, x 23 cm de ancho, x 6 cm de profundidad",
        descripcion:  "100% POLIESTER. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa de eco cuero con broche plástico regulable",
       },

       {foto: 'multimedia/riñoneraPandyAmarillo.jpg',
        tipo: "Riñonera", 
        nombre: "Pandy", 
        precio: 5000,
        id: 5,
        color: "Amarillo",
        medidas: "12 cm de alto, x 19 cm de ancho, x 6 cm de profundidad",
        descripcion:  "100% NYLON. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa regulable",
       },

       {foto: 'multimedia/riñoneraPandyRosa.jpg',
        tipo: "Riñonera", 
        nombre: "Pandy", 
        precio: 5000,
        id: 6,
        color: "Rosa",
        medidas: "12 cm de alto, x 19 cm de ancho, x 6 cm de profundidad",
        descripcion:  "100% NYLON. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa regulable",
       },

       {foto: 'multimedia/riñoneraPandyNegro.jpg',
        tipo: "Riñonera", 
        nombre: "Pandy", 
        precio: 5000,
        id: 7,
        color: "Negro",
        medidas: "12 cm de alto, x 19 cm de ancho, x 6 cm de profundidad",
        descripcion:  "100% NYLON. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa regulable",
       },

       {foto: 'multimedia/riñoneraPandyAzul.jpg',
        tipo: "Riñonera", 
        nombre: "Pandy", 
        precio: 5000,
        id: 8,
        color: "Azul",
        medidas: "12 cm de alto, x 19 cm de ancho, x 6 cm de profundidad",
        descripcion:  "100% NYLON. Un compartimiento y un amplio bolsillo al frente, ambos con cierre metálico. Correa regulable",
       },


    ];


    const verRinioneras =  new Promise ((resolve,reject) =>{
        
        setTimeout (() =>{
            resolve (arrayRinioneras);
        }, 2000);

    });
    
    useEffect ( () =>{
        verRinioneras.then ((res)=>{

            setProductos(res);
        })
    },[])

    console.log("Lista de Riñoneras:", productos);

    return(
        <div className="grid">

            <h2> {children} </h2>

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


export default ListaRinioneras;
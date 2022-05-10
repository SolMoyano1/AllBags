import './estilos.css';
import { useEffect, useState} from 'react';
//componentes
import Tarjetas from '../Tarjetas/Tarjetas';
import AgregarItems from '../AgregarItems/AgregarItems';



const ListaMochilas = ({children}) => {

    const [productos, setProductos]= useState([]);

    const arrayMochilas = [
        
        {foto: 'multimedia/mochilaSallyNegro.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 1,
         color: "Negro",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: 'multimedia/mochilaSallyBlanco.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 2,
         color: "Blanco",
         medidas: "10 cm x 23 cm x 31 cm",
        descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: 'multimedia/mochilaSallyRojo.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 3,
         color: "Rojo",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: 'multimedia/mochilaRubyBeige.jpg',
         tipo: "Mochila", 
         nombre: "Ruby", 
         precio: 8000 ,
         id: 4,
         color: "Beige",
         medidas: "11 cm x 25 cm x 34 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        
        },

        {foto: 'multimedia/mochilaSandNegro.jpg',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 9000,
         id: 5,
         color: "Negro",
         medidas: "14 cm x 28 cm x 32 cm",
         descripcion: "Exterior y forro interno: 100% PU, sintético. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: 'multimedia/MochilaSandMarron.jpg',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 9000,
         id: 6,
         color: "Marrón",
         medidas: "14 cm x 28 cm x 32 cm",
         descripcion: "Exterior y forro interno: 100% PU, sintético. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

    ];


    const verMochilas =  new Promise ((resolve,reject) =>{
        
        setTimeout (() =>{
            resolve (arrayMochilas);
        }, 2000);

    });
    
    useEffect ( () =>{
        verMochilas.then ((res)=>{

            setProductos(res);
        })
    },[])

    console.log("Lista de Mochilas:", productos);

    return(
        <div className="grid">

            <h2> {children} </h2>
            {productos.map ( (cadaArticulo, index)=> {
                
                const {id} = cadaArticulo

                return(
                    <div key={index} >
                        <Tarjetas  caracteristicas={cadaArticulo} key={id}/>
                        <AgregarItems />
                    </div>
                    
                );
            })};

        </div>
    )

}

export default ListaMochilas;

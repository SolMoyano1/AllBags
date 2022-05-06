import Tarjetas from '../Tarjetas/Tarjetas';
import AgregarItems from '../AgregarItems/AgregarItems';
import { useEffect, useState} from 'react';


const ListaProductos = ({children}) => {

    const [productos, setProductos]= useState([]);

    const articulos = [
        
        {foto: '../Multimedia/mochilaSallyNegro.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 1,
         color: "Negro",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '../Multimedia/mochilaSallyBlanco.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 2,
         color: "Blanco",
         medidas: "10 cm x 23 cm x 31 cm",
        descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '../Multimedia/mochilaSallyRojo.jpg',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 3,
         color: "Rojo",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '../Multimedia/mochilaRubyBeige.jpg',
         tipo: "Mochila", 
         nombre: "Ruby", 
         precio: 8000 ,
         id: 4,
         color: "Beige",
         medidas: "11 cm x 25 cm x 34 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        
        },

        {foto: '../Multimedia/mochilaSandNegro.jpg',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 9000,
         id: 5,
         color: "Negro",
         medidas: "14 cm x 28 cm x 32 cm",
         descripcion: "Exterior y forro interno: 100% PU, sintético. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '../Multimedia/mochilaSandMarrón.jpg',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 9000,
         id: 6,
         color: "Marrón",
         medidas: "14 cm x 28 cm x 32 cm",
         descripcion: "Exterior y forro interno: 100% PU, sintético. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Tork", 
         precio: 2500,
         id: 7,
         color: "Negro",
         medidas: "largo de 18 cm. x alto de 11 cm.",
         descripcion: " Riñonera de microfibra con cierre y tira regulable. 100% poliester.",
        
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Falka", 
         precio: 2000,
         id: 8,
         color: "Negro",
         medidas: "15 cm de alto, x 29 cm de ancho, x 6 cm de profundidad",
         descripcion: "Eco cuero semigraneado de un compartimiento, con cierre metálico, amplio bolsillo al frente con cierre metálico. Interior forrado con bolsillo con cierre. Correa de eco cuero con broche plástico regulable",
         
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Falka", 
         precio: 2000,
         id: 9,
         color: "Verde militar",
         medidas: "15 cm de alto, x 29 cm de ancho, x 6 cm de profundidad",
         descripcion: "Eco cuero semigraneado de un compartimiento, con cierre metálico, amplio bolsillo al frente con cierre metálico. Interior forrado con bolsillo con cierre. Correa de eco cuero con broche plástico regulable",
         
        },

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


    const verProductos =  new Promise ((resolve,reject) =>{
        
        setTimeout (() =>{
            resolve (articulos);
        }, 2000);

    });
    
    useEffect ( () =>{
        verProductos.then ((res)=>{

            setProductos(res);
        })
    },[])
    console.log("Soy productos", productos);

    return(
        <div>

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

export default ListaProductos;

import Tarjetas from '../Tarjetas/Tarjetas';


const listaDeProductos = ({children}) => {

    const articulos = [
        
        {foto: '',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 1,
         color: "negro",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 2,
         color: "blanco",
         medidas: "10 cm x 23 cm x 31 cm",
        descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 3,
         color: "azul",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Ruby", 
         precio: 8000 ,
         id: 4,
         color: "beige",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 6300,
         id: 5,
         color: "negro",
         medidas: "10 cm x 23 cm x 31 cm",
         descripcion: "Exterior y forro interno: tejido plano 100 % poliéster reciclado. Acolchado: espuma 100% PE. Compartimento principal con cierre de cremallera.",
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Tork", 
         precio: 2500,
         id: 6,
         color: "negro",
         medidas: "largo de 18 cm. x alto de 11 cm.",
         descripcion: " Riñonera de microfibra con cierre y tira regulable. 100% poliester.",
        
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Falka", 
         precio: 2000,
         id: 7,
         color: "negro",
         medidas: "15 cm de alto, x 29 cm de ancho, x 6 cm de profundidad",
         descripcion: "Eco cuero semigraneado de un compartimiento, con cierre metálico, amplio bolsillo al frente con cierre metálico. Interior forrado con bolsillo con cierre. Correa de eco cuero con broche plástico regulable",
         
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Falka", 
         precio: 2000,
         id: 8,
         color: "verde militar",
         medidas: "15 cm de alto, x 29 cm de ancho, x 6 cm de profundidad",
         descripcion: "Eco cuero semigraneado de un compartimiento, con cierre metálico, amplio bolsillo al frente con cierre metálico. Interior forrado con bolsillo con cierre. Correa de eco cuero con broche plástico regulable",
         
        },

        {foto: '',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 5500,
         id: 9,
         color: "marrón",
         medidas: "135 x 46 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },

        {foto: '',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 5500,
         id: 9,
         color: "negro",
         medidas: "135 x 46 x 11 cm",
         descripcion: "Cartera 100% cuero PU. Forrada por dentro. Dos asas de transporte, una correa regulable extensible y un llavero.",
        },
    ];


    const verProductos =  new Promise ((resolve,reject) =>{
        
        return setTimeout (() =>{
            resolve (articulos);
        }, 2000);
    });
    

    return(
        <div>

            <h2> {children} </h2>
            {articulos.map ( (cadaArticulo)=> {
                const {id} = cadaArticulo

                return(
                    <Tarjetas caracteristicas={cadaArticulo} key={id}/>
                );
            })};

        </div>
    )

}

export default listaDeProductos;

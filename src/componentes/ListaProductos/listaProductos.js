import listaProductos from '../Tarjetas/Tarjetas';
import Tarjetas from './componentes/Tarjetas/Tarjetas';

const listaDeProductos = ({children}) => {

    const articulos = [
        
        {foto: '',
         tipo: "Mochila", 
         nombre: "Sally", 
         precio: 6000,
         id: 1
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Ruby", 
         precio: 8000 ,
         id: 2
        },

        {foto: '',
         tipo: "Mochila", 
         nombre: "Sand", 
         precio: 6300,
         id: 3
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Tork", 
         precio: 2500,
         id: 4
        },

        {foto: '',
         tipo: "Riñonera", 
         nombre: "Falka", 
         precio: 2000,
         id: 5 
        },

        {foto: '',
         tipo: "Cartera", 
         nombre: "Celia", 
         precio: 5500,
         id: 6 
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

export default listaProductos;

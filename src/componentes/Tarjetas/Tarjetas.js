import agregarItems from "../AgregarItems/AgregarItems"


export default function tarjetasDeArticulos ({caracteristicas}){
    
    const {foto, tipo, nombre, precio}= caracteristicas
    
    return(
        <div>
            <aside>
               <img src={foto} alt={foto} /> 
            </aside>
            
            <p>{tipo}</p>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
        </div>
    )

}
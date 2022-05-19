import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import {useState} from 'react';
import './paginas.css';

const Formulario =() =>{

    //hago usestate para guardar los estados

    const [datos, setDatos]= useState ({

        nombre:"",
        apellido:"",
        mail:"",
    });

    const handleInputChange = (e) =>{
        setDatos ({
            ...datos, [e.target.name] : e.target.value
        })
    }

    const enviarDatos= (e)=>{
        e.preventDefault();
        console.log("se envió", "Nombre:"+ datos.nombre , "Apellido:"+ datos.apellido, "Mail:"+ datos.mail )
    }

    return(

        <div>
            <form className='margen' onSubmit={enviarDatos}>
                <label>Nombre:</label><br></br>
                <input type="text" name='nombre' onChange={handleInputChange}></input><br></br>
                
                <label>Apellido:</label><br></br>
                <input type="text" name='apellido' onChange={handleInputChange}></input><br></br>

                <label>Mail:</label><br></br>
                <input type="email" name='mail' onChange={handleInputChange}></input><br></br>

                <button type="submit" onClick={enviarDatos}>Enviar</button>


            
            </form>
        </div>

    )
   



}
export default Formulario;

/*

  const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (


        <div>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
        </div>

        
    );

*/
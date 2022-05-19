import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//componentes
import NavBar from './componentes/NavBar/NavBar';

//paginas
import Carteras from './paginas/Carteras';
import Mochilas from './paginas/Mochilas';
import Rinioneras from './paginas/Rinioneras';
import Carrito from './paginas/Carrito';
import Formulario from './paginas/Formulario';

//context
import { CartProvider } from './context/CartContext';
import CartContext from './context/CartContext';



function App() {
  
  return (

    <div className="App, fondo">
  
      <CartProvider>
      
        <BrowserRouter>
        
         <NavBar />
         
          <Routes >

            <Route path='/' element= { <div><Mochilas/> <Carteras/> <Rinioneras/></div> } />
            <Route path='/Mochilas' element= {<Mochilas/>} />
            <Route path='/Carteras' element= {<Carteras/>} />
            <Route path='/Rinioneras' element= {<Rinioneras/>} />
            <Route path='/Carrito' element= {<Carrito/>} />
            <Route path='/Formulario' element= {<Formulario/>} />


          </Routes>

        </BrowserRouter>
      
      </CartProvider>

    </div>

  );
  
}

export default App;

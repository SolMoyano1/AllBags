import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import Home from './paginas/Home';
import Contacto from './paginas/Contacto';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { render } from 'react-dom';

import { CartProvider } from './context/CartContext';

function App() {
  
  return (

    <div className="App">
      
      

      <CartProvider>
      
        <BrowserRouter>
        
         <NavBar />
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/contacto' element= {<Contacto />} />
          </Routes>
          
        </BrowserRouter>
      
      </CartProvider>

    </div>

  );
  
}

export default App;

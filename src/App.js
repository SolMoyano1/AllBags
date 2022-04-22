import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import Home from './paginas/Home';
import Contacto from './paginas/Contacto';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { render } from 'react-dom';

function App() {
  
  return (

    <div className="fondo">

      <BrowserRouter>
       <NavBar />
       <CartWidget />

       <Routes>
         <Route path='/' element= {<Home />} />
       </Routes>

       <Routes>
         <Route path='/contacto' element= {<Contacto />} />
       </Routes>

      </BrowserRouter>
    </div>

  );
  
}

export default App;

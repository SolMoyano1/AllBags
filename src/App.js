import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import Tarjetas from './componentes/Tarjetas/Tarjetas';
import AgregarItems from './componentes/AgregarItems/AgregarItems';
import listaProductos from './componentes/ListaProductos/listaProductos';

function App() {

  return (
    <div className="App">
      
      <NavBar />
      <CartWidget />

      <listaProductos>
        <h2>Articulos Disponibles</h2>
      </listaProductos>
      <AgregarItems/>

      
    </div>
  );
}

export default App;

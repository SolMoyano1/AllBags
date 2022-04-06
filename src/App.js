import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import Tarjetas from './componentes/Tarjetas/Tarjetas';
import AgregarItems from './componentes/AgregarItems/AgregarItems';
import ListaProductos from './componentes/ListaProductos/ListaProductos';

function App() {

  return (
    <div className="App">
      
      <NavBar />
      <CartWidget />

      <ListaProductos>
        <h2>Articulos Disponibles</h2>
      </ListaProductos>
      <AgregarItems/>

      
    </div>
  );
}

export default App;

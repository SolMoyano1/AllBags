import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import listaProductos from './componentes/ListaProductos/listaProductos';


function App() {

  return (
    <div className="App">
      
      <NavBar />
      <CartWidget />
      <listaProductos tipo={"Mochila"} nombre={"Sally"} precio={6000} />
      <listaProductos tipo={"Mochila"} nombre={"Ruby"} precio={8000} />
      <listaProductos tipo={"Mochila"} nombre={"Sand"} precio={6300} />
      <listaProductos tipo={"Riñonera"} nombre={"Tork"} precio={2500} />
      <listaProductos tipo={"Riñonera"} nombre={"Falka"} precio={2000} />
      <listaProductos tipo={"Cartera"} nombre={"Celia"} precio={5500} />

      
    </div>
  );
}

export default App;

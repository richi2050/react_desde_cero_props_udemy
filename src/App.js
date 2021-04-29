import logo from './logo.svg';
import './App.css';
import { Saludo } from './components/Saludo';
import { Comentario } from './components/Comentario';

function App() {
  return (
    <div className="container mt-5">
      <h1>PROPS</h1>
      <Saludo persona="Pedro" edad='12'></Saludo>
      <Saludo persona="Pablo" edad='14'></Saludo>
      <Saludo persona="Esteban" edad='13'></Saludo>
      <Comentario urlImage="https:picsum.photos/200" persona="pedro" texto='Aqui va el texto enviado desde el comoponente'></Comentario>
    </div>
  );
}

export default App;

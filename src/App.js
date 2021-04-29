import logo from './logo.svg';
import './App.css';
import { Saludo } from './components/Saludo';

function App() {
  return (
    <div className="container mt-5">
      <h1>PROPS</h1>
      <Saludo persona="Pedro" edad='12'></Saludo>
      <Saludo persona="Pablo" edad='14'></Saludo>
      <Saludo persona="Esteban" edad='13'></Saludo>
    </div>
  );
}

export default App;

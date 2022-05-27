import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { Form } from "./components/Form";
// Va dentro de un componente
// const [numeros, setNumeros] = useState(10)

function App() {
  //     valor  funcion que modifica al estado
  const [titulo, setTitulo] = useState("Ada clase 95");
  const [color, setColor] = useState("blue");

  const cambiarTitulo = () => {
    setTitulo("Se supendio la clase");
  };

  return (
    <div className="App-header">
      {/* Titulo que tiene como valor el estado "titulo" y cambia de color con el estado "color" */}
      <h1 style={{ color }}>{titulo}</h1>
      <div className="contenedor-btn">
        {/* Boton que cambiar el titulo a "Se suspendio la clase" */}
        <button onClick={cambiarTitulo}>Cambiar titulo</button>

        {/* Componente botton para cambiar el color del titulo */}
        <Button setColor={setColor} />
      </div>
      <Form />
    </div>
  );
}

export default App;

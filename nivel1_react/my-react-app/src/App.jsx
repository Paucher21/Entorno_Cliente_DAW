
import React, { useState } from 'react';

function ParentComponent() {
  const [name, setName] = useState("Juanaco");
  const [count, setCount] = useState(0);
  
  function handleGreet() {
    alert(`Hola desde el padre, ${name}!`);
  }

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>Componente Padre</h2>
      <p>Estado en padre: {name}</p>
      <button onClick={() => setName("Juanky")}>
        Cambiar nombre desde padre
      </button>
      
      <ChildComponent 
        name={name}
        setName={setName}
        count={count}
        setCount={setCount}
        onGreet={handleGreet}
        info={{
          age: 24,
          hobbies: ["LOL", "Cerveza"],
          occupation: "Estudiante de DAW2"
        }}
      />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div style={{ padding: '20px', marginTop: '20px', border: '2px solid green' }}>
      <h3>Componente Hijo</h3>
      <p>Nombre recibido: {props.name}</p>
      <p>Edad: {props.info.age}</p>
      <p>Ocupación: {props.info.occupation}</p>
      <p>Contador: {props.count}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button onClick={() => props.setName("Pablo")}>
          Cambiar nombre a Pablo
        </button>
        <button onClick={() => props.setName("Pedro")}>
          Cambiar nombre a Pedro
        </button>
        <button onClick={() => props.setCount(props.count + 1)}>
          Incrementar contador
        </button>
        <button onClick={props.onGreet}>
          Saludar
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ padding: '40px' }}>
      <h1>React DevTools - Demo</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
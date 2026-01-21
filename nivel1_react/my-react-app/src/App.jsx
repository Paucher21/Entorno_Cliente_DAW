import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  const incrementar = () => {
    setCount(count + 1);
  };
  
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}

function Panel() {
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [modo, setModo] = useState('');
  
  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };
  
  return (
    <div>
      <h1>Panel de Control</h1>
      
      <button onClick={toggleTexto}>
        {mostrarTexto ? 'Ocultar' : 'Mostrar'} Texto
      </button>

      {mostrarTexto && (
        <p>Este texto puede mostrarse u ocultarse</p>
      )}
      
      <Contador />
      
      <div>
        <input
          type="text"
          placeholder="Ej: stealth, turbo, chill"
          value={modo}
          onChange={(e) => setModo(e.target.value)}
        />
        <p>Modo actual: {modo || 'ninguno'}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Panel />
    </div>
  );
}

export default App;
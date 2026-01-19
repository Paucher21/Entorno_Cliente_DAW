
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [newEmails, setNewEmails] = useState(0);

  const button = user
    ? <button onClick={() => setUser(null)}>Logout</button>
    : <button onClick={() => setUser({ name: 'Antoñico' })}>Login</button>;
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Nivel 5: Miniretillo</h1>

      {button}

      {user ? (
        <p style={{ color: 'green', fontSize: '18px' }}>
          Bienvenido, <strong>{user.name}</strong>.
        </p>
      ) : (
        <p style={{ color: 'gray', fontSize: '16px' }}>
          Inicia sesión para continuar.
        </p>
      )}
      
      <hr style={{ margin: '20px 0' }} />
      
      <h2>Gestión de correos</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setNewEmails((n) => n + 1)}
          style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          +1 email
        </button>
        <button 
          onClick={() => setNewEmails(0)}
          style={{ padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Reset emails
        </button>
      </div>
      
      {newEmails > 0 && (
        <div style={{
          backgroundColor: '#e3f2fd',
          borderLeft: '5px solid #2196F3',
          padding: '15px',
          margin: '10px 0',
          borderRadius: '4px'
        }}>
          <h2 style={{ margin: '0 0 10px 0' }}>
            📬 Tienes {newEmails} {newEmails === 1 ? 'correo nuevo' : 'correos nuevos'}
          </h2>
          <p style={{ margin: 0 }}>
            {newEmails > 5 
              ? '¡Tu bandeja de entrada está explotando!' 
              : 'Revisa tu bandeja de entrada cuando puedas.'}
          </p>
        </div>
      )}
    
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Estado actual:</strong></p>
        <ul>
          <li>Usuario: {user ? `Logueado como ${user.name}` : 'No logueado'}</li>
          <li>Correos nuevos: {newEmails}</li>
        </ul>
      </div>
    </div>
  );
}
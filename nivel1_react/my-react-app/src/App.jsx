
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
    
    if (value.length <= 6) {
      setUsernameError('El username debe tener más de 6 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.includes('@') || !value.includes('.')) {
      setEmailError('El email debe contener "@" y "."');
    } else if (!emailRegex.test(value)) {
      setEmailError('Formato de email inválido');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
    
    if (value.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (usernameError || emailError || passwordError) {
      alert('No se puede enviar: el formulario contiene errores');
      return;
    }

    if (!username || !email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    alert(`Registro exitoso:\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  const hasErrors = usernameError || emailError || passwordError || !username || !email || !password;

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Miniretillo: Formulario completo</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username (mínimo 7 caracteres):
          </label>
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            style={{
              width: '100%',
              padding: '8px',
              border: usernameError ? '2px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {usernameError && (
            <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{usernameError}</p>
          )}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email (debe contener @ y .):
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            style={{
              width: '100%',
              padding: '8px',
              border: emailError ? '2px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {emailError && (
            <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{emailError}</p>
          )}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password (mínimo 8 caracteres):
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            style={{
              width: '100%',
              padding: '8px',
              border: passwordError ? '2px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {passwordError && (
            <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={hasErrors}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: hasErrors ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: hasErrors ? 'not-allowed' : 'pointer'
          }}
        >
          {hasErrors ? 'Complete el formulario correctamente' : 'Registrarse'}
        </button>
      </form>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3>Estado del formulario:</h3>
        <ul>
          <li>Username: {username || '(vacío)'} - {usernameError ? 'INVÁLIDO' : 'VÁLIDO'}</li>
          <li>Email: {email || '(vacío)'} - {emailError ? 'INVÁLIDO' : 'VÁLIDO'}</li>
          <li>Password: {password ? '*'.repeat(password.length) : '(vacío)'} - {passwordError ? 'INVÁLIDO' : 'VÁLIDO'}</li>
          <li>Botón: {hasErrors ? 'DESHABILITADO' : 'HABILITADO'}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
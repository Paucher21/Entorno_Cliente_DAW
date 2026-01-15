function App() {
  const users = [
    { id: 1, name: 'Jose', role: 'Web Developer' },
    { id: 2, name: 'Estefanía', role: 'Web Designer' },
    { id: 3, name: 'Rubén', role: 'Team Leader' },
    { id: 4, name: 'Iker', role: 'Backend Developer' },
    { id: 5, name: 'Klara', role: 'UI/UX Designer' },
  ]
  
  return (
    <>
      <h1 className="main-title">Equipo de Desarrollo</h1>
      <p className="subtitle">Lista de usuarios activos:</p>
      <ul className="user-list">
        {users.map(function (user) {
          let roleClass = 'user-item'
          if (user.role.includes('Developer')) {
            roleClass += ' developer'
          } else if (user.role.includes('Designer')) {
            roleClass += ' designer'
          } else if (user.role.includes('Leader')) {
            roleClass += ' leader'
          }
          return (
            <li key={user.id} className={roleClass}>
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default App
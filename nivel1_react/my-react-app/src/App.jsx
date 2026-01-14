// Componente principal que renderiza la aplicación completa
export default function App() {
  return <ParentComponent />
}

// Componente padre que compone varios componentes hijos
function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  )
}

// Componentes individuales
function UserComponent() {
  return <h2>Componente de usuario</h2>
}

function ProfileComponent() {
  return <h2>Componente de perfil</h2>
}

function FeedComponent() {
  return <h2>Componente de feed</h2>
}
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

function Navbar() {
    const { cart, isAdmin, toggleAdmin } = useShop();

    return (
        <nav className="navbar">
        <Link to="/" className="logo">ComicVerse</Link>
        <div className="links">
            <Link to="/">Catálogo</Link>
            
            {/* RENDERIZADO CONDICIONAL: Solo mostramos esto si es Admin */}
            {isAdmin && <Link to="/admin" style={{color: '#ffdd00'}}>Panel Admin</Link>}
            
            <Link to="/cart" className="cart-link">
            🛒 ({cart.length})
            </Link>
            
            {/* Botón Login/Logout */}
            <button 
            onClick={toggleAdmin} 
            style={{marginLeft: '15px', cursor: 'pointer', background: 'transparent', border: '1px solid white', color: 'white', padding: '5px'}}
            >
            {isAdmin ? 'Salir Admin' : 'Soy Admin'}
            </button>
        </div>
        </nav>
    );
}

export default Navbar;
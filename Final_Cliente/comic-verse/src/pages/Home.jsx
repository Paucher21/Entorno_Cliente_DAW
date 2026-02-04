import { useState } from 'react';
import { useShop } from '../context/ShopContext';

function Home() {
    const { comics, addToCart, deleteComicFromCatalog, isAdmin } = useShop(); // Importamos isAdmin y delete
    const [filter, setFilter] = useState('Todos');

    const filteredComics = filter === 'Todos' 
        ? comics 
        : comics.filter(c => c.publisher === filter);

    return (
        <div className="page">
        <h1>Catálogo de Cómics</h1>
        
        <div className="filters">
            <button onClick={() => setFilter('Todos')}>Todos</button>
            <button onClick={() => setFilter('Marvel')}>Marvel</button>
            <button onClick={() => setFilter('DC')}>DC</button>
            <button onClick={() => setFilter('Manga')}>Manga</button>
        </div>

        <div className="grid">
            {filteredComics.map((comic) => (
            <div key={comic.id} className="card">
                <img 
                    src={comic.image} 
                    alt={comic.title} 
                    onError={(e) => { e.target.src = "/placeholder.jpg"; }} 
                />
                <h3>{comic.title}</h3>
                <p>{comic.publisher}</p>
                
                <div className="price-row">
                <span>{comic.price}€</span>
                <button onClick={() => addToCart(comic)}>Añadir 🛒</button>
                </div>

                {/* ZONA EXCLUSIVA DE ADMIN */}
                {isAdmin && (
                <button 
                    onClick={() => deleteComicFromCatalog(comic.id)}
                    style={{marginTop: '10px', background: 'black', width: '100%'}}
                >
                    🗑️ Borrar Stock
                </button>
                )}
                
            </div>
            ))}
        </div>
        </div>
    );
}

export default Home;
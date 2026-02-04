import { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

// --- Sub componente para editar los precios ---
const AdminRow = ({ comic, updateComicPrice, deleteComicFromCatalog }) => {
  const [newPrice, setNewPrice] = useState(comic.price);

  const handleUpdate = () => {
    if (newPrice < 0) return alert("El precio no puede ser negativo");
    updateComicPrice(comic.id, newPrice);
    alert("Precio actualizado!");
  };

  return (
    <div className="admin-row">
      <img src={comic.image} alt="mini" className="mini-thumb" onError={(e) => e.target.src="/placeholder.jpg"} />
      <div className="info">
        <strong>{comic.title}</strong>
        <span className="publisher-tag">{comic.publisher}</span>
      </div>
      <div className="actions">
        <input 
          type="number" 
          value={newPrice} 
          onChange={(e) => setNewPrice(e.target.value)} 
          className="price-input"
        />
        <span>€</span>
        <button onClick={handleUpdate} className="btn-update">💾</button>
        <button onClick={() => deleteComicFromCatalog(comic.id)} className="btn-delete">🗑️</button>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ADMIN ---
function Admin() {
  const { addNewComic, comics, updateComicPrice, deleteComicFromCatalog, isAdmin } = useShop();
  const navigate = useNavigate();

  // Seguridad: Si no es admin, fuera
  useEffect(() => {
    if (!isAdmin) {
      alert("Acceso denegado");
      navigate('/');
    }
  }, [isAdmin, navigate]);

  const [formData, setFormData] = useState({
    title: '', price: '', publisher: 'Marvel', image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.title || !formData.price) {
      return alert("El título y el precio son obligatorios.");
    }

    // LÓGICA DE FOTO OPCIONAL
    const finalComic = {
      ...formData,
      image: formData.image.trim() === "" ? "/placeholder.jpg" : formData.image
    };

    addNewComic(finalComic);
    
    // Limpiar formulario y avisar
    alert("Cómic creado con éxito");
    setFormData({ title: '', price: '', publisher: 'Marvel', image: '' });
  };

  return (
    <div className="page">
      <h1>Panel de Administración</h1>

      {/*AÑADIR NUEVO */}
      <div className="admin-section">
        <h2>Añadir Nuevo Cómic</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <input 
            type="text" 
            placeholder="Título (Obligatorio)" 
            value={formData.title}
            onChange={e => setFormData({...formData, title: e.target.value})} 
          />
          <div className="form-row">
            <input 
              type="number" 
              placeholder="Precio (Obligatorio)" 
              value={formData.price}
              onChange={e => setFormData({...formData, price: e.target.value})} 
            />
            <select 
              value={formData.publisher}
              onChange={e => setFormData({...formData, publisher: e.target.value})}
            >
              <option value="Marvel">Marvel</option>
              <option value="DC">DC</option>
              <option value="Manga">Manga</option>
            </select>
          </div>
          <input 
            type="text" 
            placeholder="URL Imagen (Opcional)" 
            value={formData.image}
            onChange={e => setFormData({...formData, image: e.target.value})} 
          />
          <p className="hint">Si dejas la URL vacía, se usará la imagen por defecto.</p>
          <button type="submit" className="btn-add">Crear Cómic</button>
        </form>
      </div>

      <hr className="divider"/>

      {/* SECCIÓN 2: EDITAR EXISTENTES */}
      <div className="admin-section">
        <h2>✏️ Editar Stock Existente</h2>
        <div className="admin-list">
          {comics.map(comic => (
            <AdminRow 
              key={comic.id} 
              comic={comic} 
              updateComicPrice={updateComicPrice}
              deleteComicFromCatalog={deleteComicFromCatalog}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
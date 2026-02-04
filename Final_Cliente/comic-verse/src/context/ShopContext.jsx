import { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

const initialComics = [
  { id: 1, title: "Batman: Año Uno", price: 15, publisher: "DC", image: "https://m.media-amazon.com/images/I/61+hFGCapwL.jpg" },
  { id: 2, title: "Spider-Man: Blue", price: 18, publisher: "Marvel", image: "https://m.media-amazon.com/images/I/81PHzU0nPpL._UF1000,1000_QL80_.jpg" },
  { id: 3, title: "Naruto Vol. 1", price: 8, publisher: "Manga", image: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/comics/2022/09/29/j0e1C371fIESflci/cover.jpg" },
  { id: 4, title: "Watchmen", price: 8, publisher: "DC", image: "https://m.media-amazon.com/images/I/81nqASLZU5L._AC_UF1000,1000_QL80_.jpg" },
];

export const ShopProvider = ({ children }) => {
  const [comics, setComics] = useState(initialComics);
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => setIsAdmin(!isAdmin);

  const addToCart = (comic) => setCart([...cart, comic]);

  const removeFromCart = (comicId) => setCart(cart.filter((item) => item.id !== comicId));

  // --- FUNCIONES DE ADMIN ---

  const addNewComic = (newComic) => {
    setComics([...comics, { ...newComic, id: Date.now() }]);
  };

  const deleteComicFromCatalog = (id) => {
    setComics(comics.filter(c => c.id !== id));
  };

  //Función para editar el precio
  const updateComicPrice = (id, newPrice) => {
    setComics(comics.map(comic => 
      comic.id === id ? { ...comic, price: Number(newPrice) } : comic
    ));
  };

  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <ShopContext.Provider value={{ 
      comics, cart, isAdmin, toggleAdmin, 
      addToCart, removeFromCart, totalPrice, 
      addNewComic, deleteComicFromCatalog, updateComicPrice 
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
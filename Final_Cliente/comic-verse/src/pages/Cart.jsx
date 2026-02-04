import { useShop } from '../context/ShopContext';

function Cart() {
    const { cart, removeFromCart, totalPrice } = useShop();

    if (cart.length === 0) return <div className="page"><h2>Tu carrito está vacío</h2></div>;

    return (
        <div className="page">
        <h1>Tu Pedido</h1>
        <div className="cart-list">
            {cart.map((item, index) => ( // Usamos index porque puede haber repetidos
            <div key={index} className="cart-item">
                <span>{item.title}</span>
                <span>{item.price}€</span>
                <button onClick={() => removeFromCart(item.id)} className="btn-danger">Eliminar</button>
            </div>
            ))}
        </div>
        <h2 className="total">Total a pagar: {totalPrice}€</h2>
        <button className="btn-checkout" onClick={() => alert("¡Compra realizada!")}>Finalizar Compra</button>
        </div>
    );
}

export default Cart;
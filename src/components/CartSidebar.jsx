import "../styles/CartSidebar.css";
import { useCart } from "../context/CartContext";

function CartSidebar() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  return (
    <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>

      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={toggleCart}>✕</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>✕</button>

            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </div>
      )}

    </div>
  );
}

export default CartSidebar;
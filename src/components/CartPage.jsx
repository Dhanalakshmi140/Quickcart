import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <>
          <p>Cart is empty</p>
          <Link to="/">Go Shopping</Link>
        </>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>

              {item.quantity}

              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;
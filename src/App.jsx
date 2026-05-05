import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

function App() {
  // 🧠 STATE
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ➕ ADD TO CART
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // 🔄 UPDATE QUANTITY
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // 🛒 TOGGLE CART
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // 🔢 TOTAL ITEMS
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={toggleCart}
      />

      <main className="main-content">
        <ProductList 
          products={products} 
          onAddToCart={addToCart}
        />
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;
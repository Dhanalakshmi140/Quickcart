import { useCart } from "../context/CartContext";

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filtered.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
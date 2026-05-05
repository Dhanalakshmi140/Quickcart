import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category}</h2>

      {filtered.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;

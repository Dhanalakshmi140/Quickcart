import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
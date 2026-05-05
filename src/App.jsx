import Header from "./components/Header";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <Header />

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        padding:"20px"
      }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
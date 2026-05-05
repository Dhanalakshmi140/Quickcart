function ProductCard({ product }) {
  return (
    <div style={{
      border:"1px solid #ccc",
      borderRadius:"10px",
      padding:"15px",
      textAlign:"center",
      background:"white"
    }}>
      <img src={product.image} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;
function ProductCard({ product, onViewDetails }) {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.category}</p>
        <button onClick={() => onViewDetails(product)}>View Details</button>
      </div>
    );
  }
  export default ProductCard  
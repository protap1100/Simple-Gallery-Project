import ProductCard from "./ProductCard";

function ProductGallery({ products, onViewDetails }) {
    return (
      <div className="grid gap-6 p-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    );
  }
  
  export default ProductGallery;
  
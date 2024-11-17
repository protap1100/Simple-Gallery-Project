import ProductCard from "./ProductCard";

function ProductGallery({ products, onViewDetails }) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((product,index) => (
          <ProductCard key={index} product={product} onViewDetails={onViewDetails} />
        ))}
      </div>
    );
  }
  export default ProductGallery  
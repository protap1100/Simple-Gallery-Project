function ProductCard({ product, onViewDetails }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">${product.price.toFixed(2)}</p>
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  
import Modal from "react-modal";

function ProductModal({ product, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white w-11/12 md:w-2/3 lg:w-1/2 mx-auto p-6 rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          {product.name}
        </h2>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-sm text-gray-600">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProductModal;

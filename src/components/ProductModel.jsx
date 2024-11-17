import Modal from "react-modal";

function ProductModal({ product, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default ProductModal

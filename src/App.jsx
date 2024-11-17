import { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "./components/Navbar";
import FilterBar from "./components/Filterbar";
import ProductGallery from "./components/ProductGallery";
import ProductModal from "./components/ProductModel";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get("products.json").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
      const uniqueCategories = [...new Set(response.data.map((p) => p.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleFilter = (category) => {
    if (category) {
      setFilteredProducts(products.filter((p) => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSort = (sortType) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      if (sortType === "popularity") return b.popularity - a.popularity;
    });
    setFilteredProducts(sortedProducts);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setFilteredProducts(
      products.filter((p) => p.name.toLowerCase().includes(query))
    );
  };

  return (
    <div className="container mx-auto ">
      <Navbar handleSearch={handleSearch} />
      <FilterBar categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <ProductGallery products={filteredProducts} onViewDetails={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;

 function FilterBar({ categories, onFilter, onSort }) {
    return (
      <div className="filter-bar">
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => onSort(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    );
  }

  export default FilterBar;
  
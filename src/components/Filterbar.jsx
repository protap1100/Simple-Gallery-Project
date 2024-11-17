function FilterBar({ categories, onFilter, onSort }) {
    return (
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100 shadow-md rounded-md">
        {/* Category Filter */}
        <select
          className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
  
        {/* Sorting Options */}
        <select
          className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    );
  }
  
  export default FilterBar;
  
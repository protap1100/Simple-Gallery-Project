function Navbar({ handleSearch }) {
    return (
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Product Gallery</h1>
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={handleSearch}
          />
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
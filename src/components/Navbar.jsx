function Navbar({handleSearch}) {
  return (
    <nav className="navbar">
      <h1>Product Gallery</h1>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
    </nav>
  );
}

export default Navbar;

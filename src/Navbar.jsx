import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Military Force</h2>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Information</li>
          <li>Blog</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
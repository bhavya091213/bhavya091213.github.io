const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/skills"> Skills </a>
          <a href="/resume"> Resume </a>
          <a href="/projects"> Projects </a>
          <a href="/about"> About </a>
          <a href="/contact"> Contact </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

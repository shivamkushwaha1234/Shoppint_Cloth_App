import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">Cloth Shop</h1>

      <nav className="navbar__links">
        <a className="navbar__link" to="/products">
          Products
        </a>

        <a className="navbar__link" to="/cart">
          Cart
        </a>

        <a className="navbar__link" to="/profile">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Nav;
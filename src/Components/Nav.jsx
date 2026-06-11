import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">Cloth Shop</h1>

      <nav className="navbar__links">
        <NavLink className="navbar__link" to="/products">
          Products
        </NavLink>

        <NavLink className="navbar__link" to="/cart">
          Cart
        </NavLink>

        <NavLink className="navbar__link" to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
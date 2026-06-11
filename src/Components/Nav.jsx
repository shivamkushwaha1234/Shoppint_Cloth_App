import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar">
      <NavLink className="navbar__logo" to="/">Shop</NavLink>

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
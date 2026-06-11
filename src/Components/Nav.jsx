import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShopify } from "react-icons/fa";
const Nav = () => {
  return (
    <header className="navbar">
      <NavLink className="navbar__logo" to="/">Shop</NavLink>

      <nav className="navbar__links">
        <NavLink className="navbar__link" to="/products">
        <FaShopify/>
        </NavLink>

        <NavLink className="navbar__link" to="/cart">
        <FaShoppingCart/>
        </NavLink>

        <NavLink className="navbar__link" to="/profile">
       < CgProfile/>
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
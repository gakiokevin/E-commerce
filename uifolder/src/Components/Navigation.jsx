import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navigation.css";
const Nav = ({ s,items}) => {
  return (
    <div>
      <nav className="container">
        <div className="flex">
          <div className="menu">
            <p onClick={() => s()}>
              <MenuIcon />
            </p>
              <Link to="/">
              <p className="logo">
                K&M
                <br />
                STORES
              </p>
              </Link>
          </div>
          <div className="details">
              <p>
                <PersonIcon /> 
              </p>
            
            <Link to="/cart">
              <div className="cart">
                <ShoppingCartIcon />
                {items===0?null: <p>{items}</p>}
              </div>
            </Link>
          </div>
        </div>
        <div className="search">
          <SearchIcon className="btn" />
          <input type="text" name="" id="" placeholder="Search by categories" />
        </div>
      </nav>
    </div>
  );
};
Nav.propTypes = {
  s: PropTypes.func,
  items: PropTypes.number,
};

export default Nav;

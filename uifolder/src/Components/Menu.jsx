import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./Menu.css";
import PropTypes from "prop-types";
const Menu = ({ hide, show }) => {
  return (
    <div>
      <div className={show ? "show" : "hide"} id="shortcut">
        <div className="close">
          <p style={{ padding: "20px" }} onClick={() => hide()}>
            &times;
          </p>
          <p className="logo">
            K&M
            <br />
            STORES
          </p>
        </div>
        <hr />
        <h2>Our Categories</h2>
        <ul>
          <li>Electronics</li>
          <li>Men clothes</li>
          <li>Women Clothes</li>
          <li>Jewellery</li>
          <li>
            <LogoutOutlinedIcon /> <p>log out</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
};


export default Menu;

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Nav from "./Navigation";
import "./Cart.css";
const Cart = ({ cartList, items }) => {
  const location = useLocation();
  let total, catalog, cartStatus;
  function loadCart() {
    if (cartList.length !== 0) {
      total = cartList.reduce((prev, next) => {
        return prev + next.price;
      }, 0);
      total = Math.floor(total * 150).toLocaleString();

      catalog = cartList.map((product) => {
        return (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt="item" />
            </td>
            <td>
              <p>{product.title}</p>
            </td>
            <td>1</td>
            <td>{Math.floor(product.price * 150).toLocaleString()}</td>
          </tr>
        );
      });
      cartStatus = true;
    } else {
      cartStatus = false;
    }
  }
  loadCart();

  return (
    <div>
      <Nav items={items} />
      <p className="path">
        Home <span>&gt;</span>
        {location.pathname.slice(1)}
      </p>

      {cartStatus ? (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>SubTotal(Ksh)</th>
            </tr>
          </thead>
          <tbody>
            {catalog}
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Total(Ksh){total}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="emptyCart">
          <ShoppingCartIcon className="cart-icon" />
          <p className="cart-tag">Your cart is empty!</p>
          <button className="cart-btn">let&apos;s go shopping</button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartList: PropTypes.array,
  items: PropTypes.number,
};

export default Cart;

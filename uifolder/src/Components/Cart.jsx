import propTypes from "prop-types";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Nav from "./Navigation";
import "./Cart.css";

const Cart = ({ cartList,items}) => {
  console.log(cartList);
  return (
    <div>
      <Nav items={items}/>
      <div className="emptyCart">
        <ShoppingCartIcon className="cart-icon" />
        <p className="cart-tag">Your cart is empty!</p>
        <button className="cart-btn">let&apos;s go shopping</button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartList: propTypes.array,
  items:propTypes.number,
}

export default Cart;

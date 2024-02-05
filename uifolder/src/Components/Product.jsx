import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Nav from "./Navigation";
import "./Product.css";
const Product = ({ AddToCart,items,isVisible}) => {
  const location = useLocation();
  const [apiData, SetProduct] = useState(null);
  //function that format the location to match the path paremeter of fakeapi store
  function formatLocation(location) {
    if (location.includes("-")) {
      let formatedParameter = location.replace("-", " ");
      return formatedParameter.slice(1);
    } else {
      return location.slice(1);
    }
  }

  useEffect(() => {
    async function queryProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${formatLocation(
          location.pathname
        )}`
      );

      const products = await response.json();
      SetProduct(products);
    }

    queryProduct();
  }, [location.pathname]);
  
  return (
    <div style={{ overflow: "hidden" }}>

      <p className={`success ${isVisible ? 'show':'hide'}`}>Product added successfully</p>
      <Nav items={items}/>

      {apiData ? (
        apiData.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="jewelery" />
              <p className="description">{product.title}</p>
              <p className="price">
                Ksh {Math.floor(product.price * 150).toLocaleString()}
              </p>
              <button onClick={() => AddToCart(product)}>Add to cart</button>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

Product.propTypes = {
  AddToCart: PropTypes.func.isRequired,
  items:PropTypes.number,
  isVisible:PropTypes.bool
};
export default Product;

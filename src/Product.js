import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";

const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, price, img } = data;
  const cartItemAmount = cartItems[id];
  const navigate = useNavigate();

  return (
    <div className="product">
      <img src={`./images/${img}`} alt="product image" />

      <div className="description">
        <p>
          <strong> {productName} </strong>
        </p>
        <p> ${price} </p>
      </div>
      {cartItemAmount >= 1 ? (
        <button className="addToCartBtn" onClick={() => navigate("/cart")}>
          Go To Cart
        </button>
      ) : (
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;

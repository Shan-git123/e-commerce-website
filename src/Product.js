import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";

import { addDoc , collection } from "firebase/firestore";
import { db } from "./firebase-config";

const cartProductRef = collection(db, "savedCartItems");

const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, price, img } = data;
  const cartItemAmount = cartItems[id];
  const navigate = useNavigate();

  const savedInCartDatabase =  async() =>{
    addToCart(id);
    await addDoc(cartProductRef, { cartProductName :productName } )

  }

  return (
    <div className="product">
      <img src={`./images/${img}`} alt="product " />

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
        <button className="addToCartBtn" onClick={() => savedInCartDatabase()}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;

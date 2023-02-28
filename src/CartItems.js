import React, { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";

const CartItems = ({ data }) => {
  const { id, productName, price, img } = data;
  const { addToCart, removeFromCart, cartItems, updateCartItemInputCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={`./images/${img}`} alt="product" />

      <div className="description">
        <p className="product_heading">
          <strong> {productName} </strong>
        </p>
        <p> ${price} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={ cartItems[id] }
            onChange={(e) =>
              updateCartItemInputCount(Number(e.target.value), id)
            }
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

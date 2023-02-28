import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartItems, getTotalCartAmount, productList } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {productList.map((product) => {
          if (cartItems[product.id] !== 0) {
          return <CartItems data={product} key={product.id} />;}
          return null ;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h2> Sorry! Your Cart is Empty</h2>
      )}
    </div>
  );
};

export default Cart;

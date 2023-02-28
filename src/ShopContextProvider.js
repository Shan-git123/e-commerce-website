import React, { createContext, useEffect, useState } from "react";
import { db } from "./firebase-config";
import { getDocs, collection } from "firebase/firestore";

const productRef = collection(db, "productInfo");

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  
  const [productList, setProductList] = useState([]);

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (Object.values(cartItems).length === 0) {
      let cart = {};
      for (let i = 0; i < productList.length; i++) {
        cart[productList[i].id] = 0;
      }
      setCartItems(cart);
    }
  }, [productList]);

  const getProductList = async () => {
    try {
      const data = await getDocs(productRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProductList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productList.find((product) => product.id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemInputCount = (newItem, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newItem }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemInputCount,
    getTotalCartAmount,
    productList,
    getProductList,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

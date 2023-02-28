import React, { useEffect, useContext } from "react";
import Product from "./Product";
import Footer from "./Footer";
import Feature_Area from "./Feature_Area";
import { ShopContext } from "./ShopContextProvider";

const Shop = () => {
  const { productList, getProductList } = useContext(ShopContext);

  useEffect(() => {
    getProductList();
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="shop">
        <div className="shop_heading">
          <h1> Explore Products</h1>
        </div>

        <div className="products">
          {productList.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </div>
      <Feature_Area />
      <Footer />
    </>
  );
};

export default Shop;

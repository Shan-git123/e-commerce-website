import React, { useState,  useEffect, useContext } from "react";
import Product from "./Product";
import Footer from "./Footer";
import FeatureArea from "./FeatureArea";
import Loading from "./Loading";
import { ShopContext } from "./ShopContextProvider";

const Shop = () => {
  const { productList, getProductList } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getProductList();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <>
      <div className="shop">
        <div className="shop_heading">
          <h1> Explore Products</h1>
        </div>

        <div className="products">
         
          { isLoading ? ( < Loading />) :(  productList.map((product, index) => (
            <Product key={index} data={product} />
          )) )}
        </div>
      </div>
      <FeatureArea />
      <Footer />
    </>
  );
};

export default Shop;

import React from "react";
import ProductList from "../entities/ui/Product/ProductList/ProductList";
import MyHeader from "../widgets/ui/MyHeader/MyHeader";

const MainPage = () => {
  return (
    <div>
      <MyHeader></MyHeader>
      <ProductList></ProductList>
    </div>
  );
};

export default MainPage;

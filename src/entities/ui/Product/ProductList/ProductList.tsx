import React from "react";
import Loader from "../../../../shared/UI/Loader/Loader";
import { useGetProductsQuery } from "../../../services/ProductApi";
import ProductItem from "../ProductItem/ProductItem";
import classes from "../ProductList/ProductList.module.css";
const ProductList = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  if (isError) return <div>...ERROR...</div>;
  if (isLoading) return <Loader></Loader>;
  return (
    <div className={classes.productList}>
      {products?.map((product) => {
        return <ProductItem product={product} key={product.id}></ProductItem>;
      })}
    </div>
  );
};

export default React.memo(ProductList);

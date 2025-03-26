import React, { useEffect } from "react";
import Loader from "../../../../shared/UI/Loader/Loader";
import { useGetProductsQuery } from "../../../services/ProductApi";
import ProductItem from "../ProductItem/ProductItem";
import classes from "../ProductList/ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import { setProducts } from "../../../slices/ProductSlice";
const ProductList = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();
  const productList = useSelector((store: RootState) => store.product.products);
  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [products, productList]);
  if (isError) return <div>...ERROR...</div>;
  if (isLoading)
    return (
      <div className={classes.productList}>
        <Loader />
      </div>
    );
  return (
    <div className={classes.productList}>
      {productList?.map((product) => {
        return <ProductItem product={product} key={product.id}></ProductItem>;
      })}
    </div>
  );
};

export default React.memo(ProductList);

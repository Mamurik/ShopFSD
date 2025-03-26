import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import Loader from "../../../../shared/UI/Loader/Loader";
import { useGetProductsQuery } from "../../../services/ProductApi";
import { setProducts } from "../../../slices/ProductSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "../ProductList/ProductList.module.css";
import Pagination from "../../../../shared/UI/Pagination/Pagination";

const ProductList = () => {
  const dispatch = useDispatch();
  const { currentPage, perPage, products } = useSelector(
    (store: RootState) => store.product
  );

  const { data: allProducts, isError, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (allProducts) {
      dispatch(setProducts(allProducts));
    }
  }, [allProducts, dispatch]);

  const startIndex = (currentPage - 1) * perPage;
  const paginatedProducts =
    products?.slice(startIndex, startIndex + perPage) || [];

  if (isError) return <div>Ошибка загрузки данных</div>;

  if (isLoading) {
    return (
      <div className={classes.productList}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Pagination></Pagination>
      <div className={classes.productList}>
        {paginatedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default React.memo(ProductList);

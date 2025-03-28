import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import Loader from "../../../../shared/UI/Loader/Loader";
import Pagination from "../../../../shared/UI/Pagination/Pagination";
import { useGetProductsQuery } from "../../../services/ProductApi";
import { setProducts } from "../../../slices/ProductSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "../ProductList/ProductList.module.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { currentPage, perPage, products } = useSelector(
    (store: RootState) => store.product
  );

  const { data: allProducts, isError, isLoading } = useGetProductsQuery();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (allProducts) {
      dispatch(setProducts(allProducts));
    }
  }, [allProducts, dispatch]);

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const startIndex = (currentPage - 1) * perPage;
  const paginatedProducts =
    filteredProducts?.slice(startIndex, startIndex + perPage) || [];

  const removeItem = (id: number) => {
    dispatch(
      setProducts(products?.filter((product) => product.id !== id) || [])
    );
  };

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
      <input
        type="text"
        placeholder="Поиск по названию"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={classes.searchInput}
      />
      <Pagination />
      <div className={classes.productList}>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductItem
              removeItem={removeItem}
              product={product}
              key={product.id}
            />
          ))
        ) : (
          <h1 style={{ marginTop: "50px" }}>Товаров не найдено</h1>
        )}
      </div>
    </>
  );
};

export default React.memo(ProductList);

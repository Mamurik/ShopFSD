import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import ProductItem from "../../../entities/ui/Product/ProductItem/ProductItem";
import classes from "./FavoriteList.module.css";
const FavoriteList = () => {
  const likesList = useSelector((store: RootState) => store.likes.likes);
  console.log(likesList);
  if (likesList.length === 0) {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          У вас нет понравившихся товаров
        </h1>
      </>
    );
  }
  return (
    <div className={classes.likes_wrapper}>
      {likesList.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default React.memo(FavoriteList);

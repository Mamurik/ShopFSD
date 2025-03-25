import React, { FC } from "react";
import classes from "../ProductItem/ProductItem.module.css";
import { IProduct } from "../../../types/IProduct";
import MyButton from "../../../../shared/UI/MyButton/MyButton";
interface ProductItemProps {
  product: IProduct;
  onClick?: (product: IProduct) => IProduct;
}
const ProductItem: FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div onClick={() => onClick} className={classes.productItem}>
      <p className={classes.rate}>{product.rating.rate} *</p>
      <h1 className={classes.title}>{product.title}</h1>
      <img className={classes.image} src={product.image} alt="" />
      <p className={classes.desc}>{product.description}</p>
      <p className={classes.category}>{product.category}</p>

      <MyButton>Купить</MyButton>
    </div>
  );
};

export default React.memo(ProductItem);

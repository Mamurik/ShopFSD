import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import { addLike, removeLike } from "../../../../features/services/LikeSlice";
import Like from "../../../../shared/UI/Like/Like";
import MyButton from "../../../../shared/UI/MyButton/MyButton";
import { IProduct } from "../../../types/IProduct";
import classes from "../ProductItem/ProductItem.module.css";

interface ProductItemProps {
  product: IProduct;
  onClick?: (product: IProduct) => IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product, onClick }) => {
  const dispatch = useDispatch();
  const likes = useSelector((store: RootState) => store.likes.likes);

  const isLiked = likes.some((like) => like.id === product.id);

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(removeLike(product));
    } else {
      dispatch(addLike(product));
    }
  };

  return (
    <div
      onClick={() => onClick && onClick(product)}
      className={classes.productItem}
    >
      <div className={classes.rate}>
        {product.rating.rate} <BsStarFill></BsStarFill>
      </div>
      <h1 className={classes.title}>{product.title}</h1>
      <img className={classes.image} src={product.image} alt={product.title} />
      <p className={classes.desc}>{product.description}</p>
      <p className={classes.category}>{product.category}</p>
      <Like handleClick={handleLikeClick} liked={isLiked} />
      <MyButton>Купить</MyButton>
    </div>
  );
};

export default React.memo(ProductItem);

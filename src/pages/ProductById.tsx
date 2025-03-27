import { Link, useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../entities/services/ProductApi";
import MyButton from "../shared/UI/MyButton/MyButton";
import classes from "./ProductById.module.css";

const ProductById = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductsByIdQuery(id!);

  if (isLoading) return <p className={classes.loading}>Загрузка...</p>;
  if (error) return <p className={classes.error}>Ошибка загрузки товара</p>;
  if (!product) return <p className={classes.notFound}>Товар не найден</p>;

  return (
    <>
      <div className={classes.productContainer}>
        <h1 className={classes.title}>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className={classes.image}
        />
        <p className={classes.description}>{product.description}</p>
        <p className={classes.category}>Категория: {product.category}</p>
        <p className={classes.price}>Цена: ${product.price}</p>
        <p className={classes.rating}>Рейтинг: {product.rating.rate}⭐</p>

        <Link to={"/Main"}>
          <MyButton>На главную</MyButton>
        </Link>
      </div>
    </>
  );
};

export default ProductById;

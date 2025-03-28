import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../slices/ProductSlice";
import { RootState } from "../../../../app/store/store";
import { IProduct } from "../../../types/IProduct";
import classes from "./CreateProduct.module.css";
import ProductList from "../ProductList/ProductList";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  const [newProduct, setNewProduct] = useState<IProduct>({
    id: products ? products.length + 1 : 1,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 0, count: 0 },
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newProduct.title.trim()) {
      setError("Название не может быть пустым");
      return;
    }
    if (newProduct.price <= 0) {
      setError("Цена должна быть больше 0");
      return;
    }
    if (!newProduct.category.trim()) {
      setError("Категория не может быть пустой");
      return;
    }
    if (!newProduct.description.trim()) {
      setError("Описание не может быть пустым");
      return;
    }

    setError("");
    dispatch(addProduct(newProduct));

    setNewProduct({
      id: newProduct.id + 1,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 0, count: 0 },
    });
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Добавить новый продукт</h2>

        {error && <p className={classes.error}>{error}</p>}

        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            className={classes.input}
            type="text"
            name="title"
            placeholder="Название"
            value={newProduct.title}
            onChange={handleChange}
            required
          />
          <input
            className={classes.input}
            type="number"
            name="price"
            placeholder="Цена"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            className={classes.input_cat}
            type="text"
            name="category"
            placeholder="Категория"
            value={newProduct.category}
            onChange={handleChange}
            required
          />
          <textarea
            className={classes.textarea}
            name="description"
            placeholder="Описание"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <button className={classes.button} type="submit">
            Добавить
          </button>
        </form>
      </div>
      <ProductList />
    </>
  );
};

export default CreateProduct;

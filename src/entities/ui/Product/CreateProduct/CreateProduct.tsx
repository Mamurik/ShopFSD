import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";
import MyButton from "../../../../shared/UI/MyButton/MyButton";
import { addProduct } from "../../../slices/ProductSlice";
import { IProduct } from "../../../types/IProduct";
import ProductList from "../ProductList/ProductList";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((store: RootState) => store.product.products);
  const newProductId = Date.now();
  const handleAdd = () => {
    const newProduct: IProduct = {
      category: "mans Clothes",
      description: "Description not provided",
      id: newProductId, // Присваиваем уникальный id
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 100,
      title: "New Item",
      rating: {
        rate: 0,
        count: 0,
      },
    };
    dispatch(addProduct(newProduct));
    console.log(products);
  };

  return (
    <div>
      <MyButton onClick={handleAdd}>ADDED</MyButton>
      <ProductList />
    </div>
  );
};

export default CreateProduct;

// routes.ts
import CreateProductPage from "../CreateProductPage";
import Favorite from "../Favorite";
import MainPage from "../MainPage";
import ProductById from "../ProductById";
export const routes = [
  {
    path: "/Main",
    element: <MainPage />,
  },
  {
    path: "/Favorited",
    element: <Favorite />,
  },
  {
    path: "/Products/:id",
    element: <ProductById />,
  },
  {
    path: "/Create-product",
    element: <CreateProductPage />,
  },
];

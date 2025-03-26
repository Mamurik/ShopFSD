// routes.ts
import MainPage from "../MainPage";
import Favorite from "../Favorite";
export const routes = [
  {
    path: "/Main",
    element: <MainPage />,
  },
  {
    path: "/Favorited",
    element: <Favorite />,
  },
];

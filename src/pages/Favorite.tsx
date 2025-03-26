import React from "react";
import MyHeader from "../widgets/ui/MyHeader/MyHeader";
import FavoriteList from "../features/Ui/FavoriteList/FavoriteList";

const Favorite = () => {
  return (
    <div>
      <MyHeader></MyHeader>
      <FavoriteList></FavoriteList>
    </div>
  );
};

export default Favorite;

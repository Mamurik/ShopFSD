import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { setCurrentPage } from "../../../entities/slices/ProductSlice";
import classes from "./Pagination.module.css";
import React from "react";

const Pagination = () => {
  const { currentPage, perPage, products } = useSelector(
    (store: RootState) => store.product
  );
  const dispatch = useDispatch();
  return (
    <div className={classes.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        Назад
      </button>
      <span>Страница {currentPage}</span>
      <button
        disabled={currentPage >= Math.ceil((products?.length || 0) / perPage)}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        Вперед
      </button>
    </div>
  );
};

export default React.memo(Pagination);

import React, { FC } from "react";
import classes from "../MyButton/MyButton.module.css";
interface MyButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;

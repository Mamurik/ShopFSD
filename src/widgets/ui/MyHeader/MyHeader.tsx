import React from "react";
import classes from "../MyHeader/MyHeader.module.css";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
const MyHeader = () => {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header}>
        <ul className={classes.header_list}>
          <Link className={classes.header_item} to={"/Main"}>
            <li>Main</li>
          </Link>
          <Link className={classes.header_item} to={"*"}>
            <li>Contacts</li>
          </Link>
          <Link className={classes.header_item} to={"*"}>
            <li>AboutUs</li>
          </Link>
        </ul>
        <div className={classes.loginBlock}>
          <Link className={classes.likes} to={"/Favorited"}>
            <BiHeart size={40}></BiHeart>
          </Link>

          <Link className={classes.login_text} to={"/Create-product"}>
            <p>CreateProduct</p>
          </Link>
          <Link className={classes.login_text} to={"*"}>
            <p>LogIn/LogOut</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyHeader);

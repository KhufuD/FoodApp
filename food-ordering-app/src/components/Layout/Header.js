import React, { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = () => {
  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
    </header>
    <div className={classes["main-image"]}>
        <img src={meals} alt="header image"></img>
      </div>
    </Fragment>
  );
};

export default Header;

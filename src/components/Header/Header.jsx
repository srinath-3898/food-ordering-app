import React, { useContext } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <p>React Meals</p>
        <HeaderCartButton />
      </header>
      <div className={styles.meals_image}>
        <Image src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;

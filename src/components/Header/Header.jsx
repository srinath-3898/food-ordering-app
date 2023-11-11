import React from "react";
import styles from "./Header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
        <Image src={mealsImage} />
      </div>
    </>
  );
};

export default Header;

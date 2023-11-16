"use client";
import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { CartContext } from "@/store/cart/CartContext";

const HeaderCartButton = () => {
  const { handleCartOpen, items } = useContext(CartContext);

  const numberOfItems = items.reduce(
    (currentNumber, item) => currentNumber + item.quantity,
    0
  );

  return (
    <button className={styles.button} onClick={handleCartOpen}>
      <span className={styles.icon}>
        <Badge count={numberOfItems} size="small" showZero>
          <ShoppingCartOutlined style={{ fontSize: "30px", color: "white" }} />
        </Badge>
      </span>
      <span> Cart</span>
    </button>
  );
};

export default HeaderCartButton;

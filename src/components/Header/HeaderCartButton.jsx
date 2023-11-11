import React from "react";
import styles from "./HeaderCartButton.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <Badge count={3} size="small">
          <ShoppingCartOutlined style={{ fontSize: "30px", color: "white" }} />
        </Badge>
      </span>
      <span> Cart</span>
    </button>
  );
};

export default HeaderCartButton;

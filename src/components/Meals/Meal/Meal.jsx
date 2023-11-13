import React from "react";
import styles from "./Meal.module.css";

const Meal = ({ name, description, price }) => {
  return (
    <div className={styles.meal}>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Meal;

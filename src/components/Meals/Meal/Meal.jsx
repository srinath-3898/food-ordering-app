import React from "react";
import styles from "./Meal.module.css";
import MealForm from "../MealForm/MealForm";

const Meal = ({ name, description, price }) => {
  return (
    <div className={styles.meal}>
      <div className={styles.meal_details}>
        <p className={styles.meal_name}>{name}</p>
        <p className={styles.meal_description}>{description}</p>
        <p className={styles.meal_price}>{price}</p>
      </div>
      <MealForm />
    </div>
  );
};

export default Meal;

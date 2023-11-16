"use client";
import React, { useContext } from "react";
import styles from "./Meal.module.css";
import MealForm from "../MealForm/MealForm";
import { CartContext } from "@/store/cart/CartContext";

const Meal = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div className={styles.meal}>
      <div className={styles.meal_details}>
        <p className={styles.meal_name}>{name}</p>
        <p className={styles.meal_description}>{description}</p>
        <p className={styles.meal_price}>{price}</p>
      </div>
      <MealForm
        mealId={id}
        handleSubmit={(event, quantity) => {
          event.preventDefault();
          addItem({ id, name, price, quantity });
        }}
      />
    </div>
  );
};

export default Meal;

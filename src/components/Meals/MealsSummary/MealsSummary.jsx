import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={styles.card}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favouriite meal from our broad selection of available meals
        and enjoy a delicious lunch at home
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-in-time and
        ofcourse by experienced chefs
      </p>
    </div>
  );
};

export default MealsSummary;

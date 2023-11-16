import React, { useState } from "react";
import styles from "./MealForm.module.css";
import Input from "@/components/UI/Input/Input";

const MealForm = ({ handleSubmit, mealId }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <form
      className={styles.meal_form}
      onSubmit={(event) => handleSubmit(event, quantity)}
    >
      <Input
        label={"Quantity"}
        input={{
          id: `${mealId}_quantity`,
          type: "number",
          placeholder: "Quantity",
          min: "1",
          max: "5",
          step: "1",
          value: quantity,
          onChange: (event) => {
            setQuantity(event.target.value);
          },
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealForm;

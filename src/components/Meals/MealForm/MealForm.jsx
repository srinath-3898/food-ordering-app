import React from "react";
import styles from "./MealForm.module.css";
import Input from "@/components/UI/Input/Input";

const MealForm = () => {
  return (
    <form className={styles.meal_form}>
      <Input
        label={"Quantity"}
        input={{
          id: "quantity",
          type: "number",
          placeholder: "Quantity",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;

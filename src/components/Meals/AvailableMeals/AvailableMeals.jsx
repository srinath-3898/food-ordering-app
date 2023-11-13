import React from "react";
import styles from "./AvailableMeals.module.css";
import Meal from "../Meal/Meal";

const availableMeals = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 2,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 3,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 4,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 5,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 6,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 7,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 8,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 9,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
  {
    id: 10,
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: "$22.99",
  },
];

const AvailableMeals = () => {
  return (
    <div className={styles.available_meals}>
      {availableMeals.map((availableMeal) => (
        <Meal
          key={availableMeal.id}
          name={availableMeal.name}
          description={availableMeal.description}
          price={availableMeal.price}
        />
      ))}
    </div>
  );
};

export default AvailableMeals;

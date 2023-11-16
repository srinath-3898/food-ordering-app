"use client";
import { useState } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (state, action) => {};

export const CartContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleCartOpen = () => {
    setOpen(true);
  };
  const handleCartClose = () => {
    setOpen(false);
  };

  const addItem = (meal) => {
    const alreadyPresentItemIndex = items.findIndex(
      (item) => item.id === meal.id
    );
    if (alreadyPresentItemIndex !== -1) {
      setItems((prevState) => {
        return prevState.map((item, i) => {
          if (i === alreadyPresentItemIndex) {
            return {
              ...item,
              quantity: item.quantity + parseInt(meal.quantity),
            };
          } else return item;
        });
      });
    } else {
      setItems((prevState) => [...prevState, { ...meal }]);
    }
  };

  const removeItem = () => {};
  return (
    <CartContext.Provider
      value={{
        open: open,
        handleCartOpen: handleCartOpen,
        handleCartClose: handleCartClose,
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        totalAmount: totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

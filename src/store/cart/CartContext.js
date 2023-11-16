"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({
  open: false,
  handleCartOpen: () => {},
  handleCartClose: () => {},
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  totalAmount: 0,
});

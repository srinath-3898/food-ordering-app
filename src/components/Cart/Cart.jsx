"use client";
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { CartContext } from "@/store/cart/CartContext";

const Cart = () => {
  const { open, handleCartClose, items, totalAmount } = useContext(CartContext);
  return (
    <Modal
      open={open}
      isClosable={true}
      onClose={handleCartClose}
      title={"Cart Items"}
      footer={[
        <div key={"footer"} className={styles.cart_modal_footer}>
          <button
            key={"close"}
            className={styles.close_btn}
            onClick={handleCartClose}
          >
            Close
          </button>
          {items?.length > 0 ? (
            <button key={"order"} className={styles.order_btn}>
              Order
            </button>
          ) : (
            <></>
          )}
        </div>,
      ]}
    >
      {items?.length > 0 ? (
        items?.map((item) => (
          <div key={item?.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <div className={styles.empty_cart}>
          <p>Your cart is empty, please add items to order</p>
        </div>
      )}
    </Modal>
  );
};

export default Cart;

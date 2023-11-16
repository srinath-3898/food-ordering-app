"use client";
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { CartContext } from "@/store/cart/CartContext";

const Cart = () => {
  const { open, handleCartClose, items, addItem, removeItem } =
    useContext(CartContext);
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
          <div key={item?.id} className={styles.cart_item}>
            <div className={styles.item_details}>
              <p>{item.name}</p>
              <div className={styles.quantity}>
                <p>{item.price}</p>
                <p>x{item.quantity}</p>
              </div>
            </div>
            <div className={styles.container_2}>
              <button
                className={styles.plus_btn}
                onClick={() => addItem({ ...item, quantity: 1 })}
              >
                +
              </button>
              <button
                className={styles.minus_btn}
                onClick={() => removeItem(item.id, item.quantity)}
              >
                -
              </button>
            </div>
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

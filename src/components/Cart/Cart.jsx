import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      isClosable={true}
      onClose={() => setOpen(false)}
      title={"Cart Items"}
      footer={[
        <div key={"footer"} className={styles.cart_modal_footer}>
          <button
            key={"close"}
            className={styles.close_btn}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <button key={"order"} className={styles.order_btn}>
            Order
          </button>
        </div>,
      ]}
    >
      <div>
        Sushi
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
    </Modal>
  );
};

export default Cart;

import React from "react";
import styles from "./Modal.module.css";
import { CloseOutlined } from "@ant-design/icons";

const Modal = ({ open, title, isClosable, children, footer, onClose }) => {
  return (
    <div
      className={styles.modal_wrapper}
      style={{ display: open ? "grid" : "none" }}
    >
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <p>{title}</p>
          {isClosable === false ? (
            <></>
          ) : (
            <CloseOutlined onClick={() => onClose()} />
          )}
        </div>
        <div className={styles.modal_body}>{children}</div>
        <div className={styles.modal_footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;

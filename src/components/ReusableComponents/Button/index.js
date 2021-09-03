import React from "react";
import styles from "./index.module.css";

export const Button = ({ children, content }) => {
  return (
    <div className={styles.customButton}>
        {children}
      <div className={styles.popover__content}>{content}</div>
    </div>
  );
};

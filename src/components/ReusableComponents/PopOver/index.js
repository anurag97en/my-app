import React from "react";
import styles from "./index.module.css";

export const PopOver = ({ children, content }) => {
  return (
    <div className={styles.popover__wrapper}>
        {children}
      <div className={styles.popover__content}>{content}</div>
    </div>
  );
};

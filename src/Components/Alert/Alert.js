import React from "react";
import styles from "./Alert.module.css";

export default function Alert({ nameAlert }) {
  return (
    <div className={styles.alertBlock}>
      <p>{nameAlert}! This contacts already exists!</p>
    </div>
  );
}

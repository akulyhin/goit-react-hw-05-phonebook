import React from "react";
import styles from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.form}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        type="search"
        id="filter"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

import React from "react";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
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

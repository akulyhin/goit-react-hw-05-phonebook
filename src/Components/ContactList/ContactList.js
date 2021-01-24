import React from "react";

export default function Contacts({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{" "}
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

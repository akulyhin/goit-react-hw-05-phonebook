import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./ContactList.module.css";
import contactItem from "../Animation/contactItem.module.css";

export default function Contacts({ contacts, onRemoveContact }) {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} classNames={contactItem} timeout={250}>
          <li className={styles.contactItem}>
            <span>{name}</span> <span>{number} </span>
            <button
              className={styles.btnClose}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

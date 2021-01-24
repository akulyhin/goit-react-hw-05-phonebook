import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import styles from "./App.module.css";
import logoAppear from "./Animation/LogoAppear.module.css";
import Alert from "./Alert/Alert";
import AlertAnimation from "./Animation/Alert.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
    alert: false,
    nameAlert: "",
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisiblecontacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (contact) => {
    const { name, number } = contact;
    const { contacts } = this.state;

    if (name === "" || number === "") {
      return;
    }

    if (contacts.findIndex((contact) => contact.name === name) !== -1) {
      // alert(`${name} is already in contacts`);
      this.setState({ alert: true, nameAlert: name });
      return;
    }

    const contactNew = {
      id: uuid(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  removeContact = (ContactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== ContactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter, alert, nameAlert } = this.state;
    const visibleContact = this.getVisiblecontacts();

    return (
      <div className={styles.formBlock}>
        <CSSTransition
          in={alert}
          timeout={250}
          classNames={AlertAnimation}
          unmountOnExit
        >
          <Alert nameAlert={nameAlert} />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={logoAppear}
          timeout={500}
          unmountOnExit
        >
          <h1 className={styles.logo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>

        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}

        <ContactList
          contacts={visibleContact}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;

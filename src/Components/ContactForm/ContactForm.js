import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit({ name, number });

    this.setState({
      name: "",
      number: "",
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            id="name"
          />
          <br />
          <p></p>
          <label htmlFor="number">Number</label>
          <br />
          <input
            type="tel"
            name="number"
            id="number"
            value={number}
            onChange={this.handleInputChange}
          />
          <br />
          <p></p>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

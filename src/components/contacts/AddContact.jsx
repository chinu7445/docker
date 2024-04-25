import React, { Component } from "react";
import { connect } from "react-redux";
import TextInputGroup from "../layout/TextInputGroup";
import { addContact } from "../../actions/contactActions";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address:"",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { id, name, email,address, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      address
    };

    //// SUBMIT CONTACT ////
    this.props.addContact(newContact);
    localStorage.setItem(name, JSON.stringify(newContact));
    let contactList = JSON.parse(localStorage.getItem("contacts1")); // Parse the stored string to an array
    if (!contactList) {
      contactList = []; // Initialize an empty array if contactList is null or undefined
    }
    contactList = [...contactList, name] // Add the new contact name to the array
    localStorage.setItem("contacts1", JSON.stringify(contactList));

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      address:"",
      errors: {}
    });

    //Redirect to home
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone,address, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <TextInputGroup
              label="Address"
              name="address"
              placeholder="Enter address"
              value={address}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
              style={{backgroundColor:'aqua'}}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);

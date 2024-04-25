import React, { Component } from "react";
import { Link,useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { name, email, phone,address } = this.props.contact;
    return (
      <div className="card mb-2">
        <div className="card-header">
          <h4>
            {name}
            <i
              className="fa fa-sort-down ml-2"
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo,
                })
              }
            ></i>
            {/* <i
              className="fa fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={() => {
                let contacts = JSON.parse(localStorage.getItem("contacts1"));
                let newContacts = contacts.filter((cName) => cName != name);
                localStorage.setItem("contacts1", JSON.stringify(newContacts));
                localStorage.removeItem(`${name}`);
                // let navigate=useHistory();
                // navigate.push('/');
              }}
            ></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={() => {
                let contacts = JSON.parse(localStorage.getItem("contacts1"));
                let newContacts = contacts.filter((cName) => cName != name);
                localStorage.setItem("contacts1", JSON.stringify(newContacts));
                localStorage.removeItem(`${name}`);}}
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
            {/* <Link to={`contact/edit/${id}`}>
              <i
                className="fa fa-pencil"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
              />
            </Link> */}
          </h4>
        </div>
        {this.state.showContactInfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
              <li className="list-group-item">Address: {address}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteContact }
)(Contact);

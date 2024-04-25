import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./logout";
import './header.css';
import VariantsExample from "./profile";

const Header = props => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-dark bg-danger mb-3 myNav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Contact Store
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">
              <i className="fa fa-plus"></i> Insert Contact
            </Link>
          </li>
          <li className="nav-item">
            <VariantsExample></VariantsExample>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fa fa-question"></i> About
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <LogoutButton></LogoutButton>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  header: "Contact Manager"
};

export default Header;

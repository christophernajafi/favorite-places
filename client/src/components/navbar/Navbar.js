import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

import SearchBar from "../search-bar/SearchBar";
import { logout } from "../../redux/reducers/authReducer";
import "./navbar.css";

/*
When not authenticated, user should see links for Log In and Sign Up
When authenticated, user should see links for My Lists and Dropdown Menu (Settings, Log Out)
When authenticated, Dropdown Menu should show user's name and profile pic
*/

const NavbarComponent = props => {
  const { isAuthenticated, logout, searchResults } = props;

  const guestLinks = (
    <Fragment>
      <Nav.Link href="/log-in">Log In</Nav.Link>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Nav.Link href="/lists">My Lists</Nav.Link>

      {/* dropdown menu should display user's first name and profile pic */}
      <NavDropdown
        title={<i className="far fa-user-circle"> Hello</i>}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout} href="/">
          Log Out
        </NavDropdown.Item>
      </NavDropdown>
    </Fragment>
  );

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Favorite Places</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          {!isAuthenticated && guestLinks}
          {isAuthenticated && authLinks}
        </Nav>
        {searchResults.length > 0 && <SearchBar />}
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  searchResults: PropTypes.array
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout })(NavbarComponent);

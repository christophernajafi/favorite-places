import React, { Fragment } from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";
import "./navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { logout } from "../../redux/reducers/authReducer";

/*
When not authenticated, user should see links for Log In and Sign Up
When authenticated, user should see links for My Lists and Dropdown Menu (Settings, Log Out)
When authenticated, Dropdown Menu should show user's name and profile pic
*/

const NavbarComponent = props => {
  const { isAuthenticated, logout } = props;

  // const guestLinks = ()

  // const authLinks = ()

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Favorite Places</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>

          {/* displayed when not authenticated */}
          {!isAuthenticated && (
            <Fragment>
              <Nav.Link href="/log-in">Log In</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </Fragment>
          )}

          {/* displayed when authenticated */}
          {isAuthenticated && (
            <Fragment>
              <Nav.Link href="/lists">My Lists</Nav.Link>

              {/* dropdown should display user's first name */}
              <NavDropdown
                title={<i className="far fa-user-circle"> Hello</i>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout} href="#!">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Fragment>
          )}
        </Nav>
        {props.searchResults.length > 0 && <SearchBar />}
      </Navbar.Collapse>
    </Navbar>
  );
};

// remember to import propTypes
NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout })(NavbarComponent);

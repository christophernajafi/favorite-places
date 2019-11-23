import React, { Fragment } from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";
import "./navbar.css";
// eslint-disable-next-line
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

/*
When not authenticated, user should see links for Log In and Sign Up
When authenticated, user should see links for My Lists and Dropdown Menu (Settings, Log Out)
*/

// dummy auth value
const isAuthenticated = false;

const NavbarComponent = props => {
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
                title={<i class="far fa-user-circle"> Chris</i>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
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
// NavbarComponent.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
    //   isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(NavbarComponent);

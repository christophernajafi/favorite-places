import React from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";
import "./navbar.css";
// eslint-disable-next-line
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

/*
When not authenticated, user should see links for Log In and Sign Up
When authenticated, user should see links for My Lists and Dropdown Menu (Settings, Log Out)
*/

const NavbarComponent = props => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Favorite Places</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/log-in">Log In</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          {/* <Nav.Link href="/lists">My Lists</Nav.Link>
          <NavDropdown
            title={<i class="far fa-user-circle"> Chris</i>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {props.searchResults.length ? <SearchBar /> : <div></div>}
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

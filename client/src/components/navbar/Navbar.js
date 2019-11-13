import React from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";
import "./navbar.css";
import { Navbar, Nav, Form } from "react-bootstrap";

/*
When logged out, user should see links for Log In and Sign Up
When logged in, user should see links for My Lists, Logout, and Settings
*/

const NavbarComponent = props => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Favorite Places</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="#">Log In</Nav.Link>
          <Nav.Link href="#">Sign Up</Nav.Link>
        </Nav>
        <Form inline>
          {props.searchResults.length ? <SearchBar /> : <div></div>}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

export default connect(mapStateToProps)(NavbarComponent);
